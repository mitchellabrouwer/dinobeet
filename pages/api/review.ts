import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getReview } from "../../lib/data";
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
    // const reviews = await getReviews(prisma, req.body.recipeId);
    const review = await getReview(prisma, req.query.id[0], user.id);
    return res.send({ review });
  }

  if (req.method === "POST") {
    if (req.body.name.length > 0 && req.body.id.length > 0) {
      throw new Error("please only submit name or id");
    }
    let recipeIdByName;

    if (req.body.name.length > 0) {
      recipeIdByName = await prisma.recipe.findFirst({
        where: { name: req.body.name },
      });
    }

    console.log("user.id", user.id);
    await prisma.review.upsert({
      create: {
        recipe: { connect: { id: req.body.recipeId || recipeIdByName } },
        user: { connect: { id: user.id } },
        rating: req.body.rating,
        comment: req.body.comment,
      },
      update: {
        recipe: { connect: { id: req.body.recipeId || recipeIdByName } },
        user: { connect: { id: user.id } },
        rating: req.body.rating,
        comment: req.body.comment,
      },
      where: {
        recipeId_userId: {
          recipeId: req.body.recipeId || recipeIdByName,
          userId: user.id,
        },
      },
    });

    return res.json({ review: true });
  }

  if (req.method === "DELETE") {
    const reviewExists = await prisma.review.findUnique({
      where: {
        recipeId_userId: {
          recipeId: req.body.recipeId,
          userId: user.id,
        },
      },
    });

    if (reviewExists) {
      await prisma.review.delete({
        where: {
          recipeId_userId: {
            recipeId: req.body.recipeId,
            userId: user.id,
          },
        },
      });

      return res.send({ review: true });
    }

    return res.send({ review: false });
  }

  return res.end();
};
