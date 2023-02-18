import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getFavourites } from "../../lib/data";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not logged in" });
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  if (req.method === "GET") {
    const favourites = await getFavourites(prisma, user.id);

    return res.send({ ...favourites });
  }

  if (req.method === "POST") {
    const isFavourite = await prisma.favourite.findUnique({
      where: {
        recipeId_userId: { recipeId: req.body.recipeId, userId: user.id },
      },
    });

    if (isFavourite) {
      await prisma.favourite.delete({
        where: {
          recipeId_userId: { recipeId: req.body.recipeId, userId: user.id },
        },
      });
    } else {
      await prisma.favourite.create({
        data: {
          recipe: { connect: { id: req.body.recipeId } },
          user: { connect: { id: user.id } },
        },
      });
    }

    const favourites = await prisma.favourite.findMany({
      where: {
        userId: user.id,
      },
    });

    return res.send({
      favourites,
    });
  }

  return res.end();
};
