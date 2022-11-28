import getStripe from "./stripe";

export const handleJoinClick = async () => {
  const res = await fetch("/api/stripe/session", {
    method: "POST",
  });

  const data = await res.json();

  if (data.status === "error") {
    alert(data.message);
    return;
  }

  const { sessionId } = data;

  // @ts-ignore
  // eslint-disable-next-line no-undef
  const stripe = await getStripe();
  stripe.redirectToCheckout({
    sessionId,
  });
};
