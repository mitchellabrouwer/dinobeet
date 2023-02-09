import { NextApiRequest, NextApiResponse } from "next";
import { getRecipes } from "../../lib/data";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { cursor } = req.query;
    const { query, difficulty, cost, occasion, maxTime, tags, pagination } =
      req.query;
    const options = {
      query,
      difficulty,
      cost,
      occasion,
      maxTime,
      tags,
      pagination,
    };

    const take = 4;

    const recipes = await getRecipes(prisma, cursor, take, options);
    return res.json(recipes);
  }

  return res.end();
};
