import { NextApiRequest, NextApiResponse } from "next";
import { getRecipe, getRecipes, getReviews } from "../../lib/data";
import prisma from "../../lib/prisma";

interface Request extends NextApiRequest {
  id?: string;
  name: string;
  difficulty: string;
  cost: string;
  occasion: string;
  maxTime: string;
  tags: string;
  pagination: string;
}

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    if (typeof req.query.id === "string" && req.query.id.length > 0) {
      const recipe = await getRecipe(prisma, req.query.id);
      const reviews = await getReviews(prisma, [req.query.id]);
      return res.json({ recipe, reviews });
    }

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

    console.log("options", options);

    const take = 4;

    const recipes = await getRecipes(prisma, cursor, take, options);
    console.log("recipes", recipes);
    return res.json(recipes);
  }

  return res.end();
};
