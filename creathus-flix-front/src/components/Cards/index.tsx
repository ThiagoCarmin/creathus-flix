import { Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../../constant";
import { movieType } from "../../pages/Home";


type CardsType = {movies:movieType[]}
const Cards = ({movies}:CardsType) => {
  const navigation = useNavigate()
  return (
    <Row style={{gap: 20}}>
      {movies.map((element) => (
        <Card
          onClick={() => {
            navigation(links.selectMovie+element.id)
          }}
          key={element.id.toString()}
          hoverable
          style={{ width: 180 }}
          cover={
            <img
              alt="example"
              src={element.MovieImage.url}
              style={{height:150}}
            />
          }
        >
          <Meta title={element.titulo} />
        </Card>
      ))}
    </Row>
  );
};

export default Cards;
