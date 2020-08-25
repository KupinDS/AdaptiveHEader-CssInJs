import React from 'react';
import Header from './Componenets/Header/Header'
import styled from 'styled-components'

const Page = styled.div`
height: 2000px;
`

const Title = styled.h1`
padding: 1rem;
font-size: 60px;
`

const Text = styled.p`
padding: 1rem;
font-size: 14px;
`

function App() {
  return (
    <Page>
      <Header />
      <main>
        <Title>Other content.</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic minima illo? Deleniti quidem nam molestiae expedita voluptatem corporis assumenda, dolorem voluptate sed repellat provident officiis sequi maiores blanditiis architecto.</Text>
      </main>
    </Page>
  );
}

export default App;