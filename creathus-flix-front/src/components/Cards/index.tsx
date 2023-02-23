import { Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const imagens = [
  {
    id: 1,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
  {
    id: 2,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
  {
    id: 3,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
  {
    id: 4,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
  {
    id: 5,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
  {
    id: 6,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
  },
];

const Cards: React.FC = () => {
  return (
    <Row style={{gap: 20}}>
      {imagens.map((element) => (
        <Card
          key={element.id}
          hoverable
          style={{ width: 180 }}
          cover={
            <img
              alt="example"
              src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"
            />
          }
        >
          <Meta title="Carros" />
        </Card>
      ))}
    </Row>
  );
};

export default Cards;
