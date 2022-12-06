/* eslint-disable camelcase */

import { stripe } from "./stripe";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // eslint-disable-next-line global-require
  const stripe_session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],

    success_url: `${process.env.BASE_URL}/paid?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/cancelled`,
  });

  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log(stripe_session);

  return res.end(
    JSON.stringify({
      status: "success",
      sessionId: stripe_session.id,
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      url: stripe_session.url,
    })
  );
};
