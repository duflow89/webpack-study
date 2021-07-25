import React from 'react'
import Recipes from './Recipes'
import '../styles/index.scss'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

const App = () => (
  <>
    <section className="hero" />
    <main>
      <section>
        <h1>
          안녕<span role="img">👋</span> 리액트!
        </h1>
      </section>
    </main>

    <img src={sword} alt="sword" width="250" />
    <img src={swordSvg} alt="sword" width="250" />

    <Recipes />
  </>
)

export default App
