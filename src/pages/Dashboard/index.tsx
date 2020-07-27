import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Text, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Text>Explore Repositórios no Github :)</Text>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard;
