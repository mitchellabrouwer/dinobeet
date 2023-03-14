import { OccasionOptions } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

interface Request extends NextApiRequest {
  query: {
    occasion: string;
  };
}

function isOccasionOptions(occasion: string): occasion is OccasionOptions {
  return occasion in OccasionOptions;
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async (req: Request, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not logged in" });
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  if (req.method === "GET") {
    const occasionQuery = req.query.occasion;

    if (!isOccasionOptions(occasionQuery)) {
      return res.status(400).json({ message: "no such occasion" });
    }

    const count = await prisma.recipe.count({
      where: {
        occasion: {
          hasSome: [occasionQuery],
        },
      },
    });

    console.log(count);

    const recipes = await prisma.recipe.findMany({
      where: {
        occasion: {
          hasSome: [occasionQuery],
        },
      },
    });

    return res.json(recipes);
  }

  // const recipe = await getRepository(Recipe)
  //   .createQueryBuilder("recipe")
  //   // .select("*")
  //   .addSelect("MIN(RANDOM()) AS ord")
  //   // .leftJoinAndSelect("recipe.tags", "tags") -> not able to get working
  //   .distinct(true)
  //   .where("recipe.occasion like :occ", { occ: `%${occasion}%` })
  //   .groupBy("recipe.id")
  //   .orderBy("ord")
  //   .take(count)
  //   .getMany();
};
