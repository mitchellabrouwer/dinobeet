import { Prisma } from "@prisma/client";

export const users: Prisma.UserCreateInput[] = [
  {
    id: "f6e76c09-a1e5-494e-bf23-b920a226bf27",
    name: "test",
    email: "test@gmail.com",
    paid: true,
    stripePi: "",
    role: "ADMIN",
  },
  {
    id: "77bf4818-5909-4718-a2cb-414ed0538d27",
    name: "test2",
    email: "test2@gmail.com",
    paid: true,
    stripePi: "",
    role: "USER",
  },
];
