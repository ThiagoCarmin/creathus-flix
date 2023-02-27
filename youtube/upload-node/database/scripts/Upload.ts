import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

const baseUrl = "http://localhost:8000/"

export const Upload = async (request: Request, response: Response) => {
  const {filename, originalname, size, } = request.file as Express.Multer.File;
  const upload = await prismaClient.movieImage.create({
    data: {
      fileName: filename,
      name: originalname,
      size: size,
      url: `${baseUrl}uploads/${filename}`,
    },
    select: {
      id: true,
      name: true,
      url: true
    },
  });
  return response.status(201).json(upload);
};
