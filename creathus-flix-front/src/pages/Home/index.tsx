import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { findManyMovies } from "../../services/api";

export type movieType = {
  MovieImage: {
    id: Number;
    url: string;
  };
  id: Number;
  titulo: string;
};

const Home: React.FC = () => {
  const [movies, setMovies] = useState<movieType[] | []>([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const nome = await findManyMovies();
        console.log(nome);
        setMovies(nome);
      } catch (error) {}
    }
    getMovie();
  }, []);
  return (
    <>
      <Title level={3}>Últimos Filmes Adicionados</Title>
      <Title className="subTitle" level={4}>
        Próximos Filmes
      </Title>
      <Cards movies={movies} />
    </>
  );
};

export default Home;
