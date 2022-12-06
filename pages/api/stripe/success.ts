/* eslint-disable camelcase */
import prisma from "../../../lib/prisma";
import { stripe } from "./stripe";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const stripe_session = await stripe.checkout.sessions.retrieve(
    req.body.session_id
  );

  const { email, name } = stripe_session.customer_details;

  await prisma.user.findUnique({ where: { email } });

  await prisma.user.upsert({
    create: {
      email,
      name,
      stripePi: req.body.session_id,
      paid: true,
    },
    update: {
      stripePi: req.body.session_id,
      name,
      paid: true,
    },
    where: {
      email,
    },
  });

  return res.end(
    JSON.stringify({
      email: stripe_session.customer_details.email,
    })
  );
};
