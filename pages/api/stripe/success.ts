/* eslint-disable camelcase */
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { stripe } from "./stripe";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const session = await getSession({ req });

  if (!session) return res.status(401).json({ message: "Not logged in" });

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) return res.status(401).json({ message: "User not found" });

  const stripe_session = await stripe.checkout.sessions.retrieve(
    req.body.session_id
  );

  const { name } = stripe_session.customer_details;

  await prisma.user.update({
    data: {
      name,
      paid: true,
      stripePi: req.body.session_id,
    },
    where: {
      id: stripe_session.client_reference_id,
    },
  });

  return res.end(
    JSON.stringify({
      email: stripe_session.customer_details.email,
    })
  );
};
