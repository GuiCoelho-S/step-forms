import React from 'react';
import { FormComponent } from '../components/Form';
import { GlobalStyle, Layout } from './style';
// import { Container } from './styles';

export const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <FormComponent />
      </Layout>
    </div>
  )
}
