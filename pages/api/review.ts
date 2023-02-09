import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
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
    const reviews = await prisma.review.findMany({
      where: {
        recipeId: req.body.recipeId,
      },
    });

    return res.send({
      reviews,
    });
  }

  if (req.method === "POST") {
    await prisma.review.upsert({
      create: {
        recipe: { connect: { id: req.body.recipeId } },
        user: { connect: { id: user.id } },
        rating: req.body.rating,
        comment: req.body.comment,
      },
      update: {
        recipe: { connect: { id: req.body.recipeId } },
        user: { connect: { id: user.id } },
        rating: req.body.rating,
        comment: req.body.comment,
      },
      where: {
        recipeId_userId: {
          recipeId: req.body.recipeId,
          userId: user.id,
        },
      },
    });
    console.log("here");
    debugger;
    const averageAndCount = await prisma.review.groupBy({
      by: ["recipeId"],
      _count: {
        id: true,
      },
      _avg: {
        rating: true,
      },
      where: {
        recipeId: req.body.recipeId,
      },
    });

    console.log("count", averageAndCount);

    // total count
    // average

    return res.json({ review: true });
  }

  return res.end();
};
