import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export const FindManyMovies = async (request: Request, response: Response) => {
  const movies = await prismaClient.movie.findMany({
    select: {
      id: true,
      titulo: true,
      MovieImage: {
        select: {
          id: true,
          url: true,
        },
      },
    },
    orderBy:{id:"desc"}
  });
  return response.json(movies);
};
