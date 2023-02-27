import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export const FindFirstMovie = async (request: Request, response: Response) => {
  const { movieId } = request.params;

  if(isNaN(Number(movieId))){
    return response.status(404).json("Escreva um Número")
  }
  const movie = await prismaClient.movie.findFirst({
    where: {
      id: Number(movieId),
    },
    select: {
      id: true,
      autor: true,
      titulo: true,
      descricao: true,
      MovieImage: {
        select: {
          id: true,
          url: true,
        },
      },
    },
  });
  if(!movie){
    return response.status(404).json("Não encontrado")
  }
  return response.json(movie);
};
