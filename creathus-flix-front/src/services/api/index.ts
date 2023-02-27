import { api } from "../../config/api";
import { movieType } from "../../pages/Home";
import { previewType } from "../../pages/SelectMovie";

export type createMovieType = {
  autor: string;
  descricao: string;
  titulo: string;
  movieImageId: Number
};

type uploadImageType = {
  id: Number;
  name: string;
  url: string;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file, file.name);
  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const data = response.data;
  return data as uploadImageType;
};

export const createMovie = async (movie:createMovieType) => {
  const response = await api.post("/create-movie", movie)
  const data = response.data;
  return data 
}

export const findManyMovies = async () => {
  const response = await api.get("/all-movies")
  const data = response.data;
  return data as movieType[]
}

export const getMovie = async (id:Number | string | undefined) => {
  const response = await api.get("/first-movie/"+id)
  const data = response.data;
  return data as previewType
}