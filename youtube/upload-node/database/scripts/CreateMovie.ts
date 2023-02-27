import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

const baseUrl = "http://localhost:8000/"

export const CreateMovie = async (request: Request, response: Response) => {
  const { autor, descricao, titulo, movieImageId } = request.body;
  const newMovie = await prismaClient.movie.create({
    data: {
      autor,
      descricao,
      titulo,
    },
  });
  await prismaClient.movieImage.update({
    data: {

      movieId: newMovie.id,
    },
    where: {
      id: movieImageId
    },
    select: {
      id: true,
    },
  });
  return response.status(201).json(newMovie)
};