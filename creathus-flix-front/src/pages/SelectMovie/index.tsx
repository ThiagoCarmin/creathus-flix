import { LoadingOutlined } from "@ant-design/icons";
import { Descriptions, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagePreview from "../../components/ImagePreview";
import { getMovie } from "../../services/api";
import { movieType } from "../Home";

export type previewType = movieType & {
  descricao: string;
  autor: string;
};
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SelectMovie: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [movie, setMovie] = useState<previewType | null>(null);
  useEffect(() => {
    async function firstMovie() {
      setLoading(true);
      try {
        const nome = await getMovie(id);
        console.log(nome);
        setMovie(nome);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    firstMovie();
  }, []);

  return (
    <div>
      {!movie && loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <div>
          <ImagePreview src={movie?.MovieImage.url!} />
          <Descriptions
            title="Veja seu filme aqui"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Autor">{movie?.autor}</Descriptions.Item>
            <Descriptions.Item label="Titulo">{movie?.titulo}</Descriptions.Item>
            <Descriptions.Item label="Descrição">{movie?.descricao}</Descriptions.Item>
            
          </Descriptions>
        </div>
      )}
    </div>
  );
};

export default SelectMovie;
