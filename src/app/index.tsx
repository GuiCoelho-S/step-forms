import React from 'react';
import Form from '../components/Form';
import { GlobalStyle, Layout } from './style';
// import { Container } from './styles';

export const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Form />
      </Layout>
    </div>
  )
}
