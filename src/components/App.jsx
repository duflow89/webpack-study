import React from 'react';
import Recipes from './Recipes';
import '../styles/index.scss';

const App = () => (
  <>
    <section className='hero' />
    <main>
      <section>
        <h1>안녕👋 리액트!</h1>
      </section>
    </main>

    <Recipes />
  </>
);

export default App;
