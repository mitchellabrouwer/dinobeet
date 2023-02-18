import getStripe from "./stripe";

export const handleJoinClick = async () => {
  const res = await fetch("/api/stripe/session", {
    method: "POST",
  });

  const data = await res.json();

  if (data.status === "error") {
    console.log(data.message);
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

export const getFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

export const setToStorage = (key, value) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }
};
