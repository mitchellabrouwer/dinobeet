import { OccasionOptions } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getRandomRecipe } from "../../lib/data";
import prisma from "../../lib/prisma";

interface Request extends NextApiRequest {
  query: {
    occasion: string;
  };
}

function isOccasionOptions(occasion: string): occasion is OccasionOptions {
  return occasion in OccasionOptions;
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
    console.log(occasionQuery);

    if (!isOccasionOptions(occasionQuery)) {
      return res.status(400).json({ message: "no such occasion" });
    }

    const recipe = await getRandomRecipe(prisma, occasionQuery);

    return res.json(recipe);
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
