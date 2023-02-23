import Title from 'antd/es/typography/Title';
import React from 'react';
import Cards from '../../components/Cards';


// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
    <Title level={3}>Últimos Filmes Adicionados</Title>
    <Title className='subTitle' level={4}>Próximos Filmes</Title>
    <Cards/>
    </>
  );
}

export default Home;