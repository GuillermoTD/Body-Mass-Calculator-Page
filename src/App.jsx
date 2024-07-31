import { useState } from 'react';
import Hero from './components/Hero/Hero';
import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Section1/>
      <Section2/>
    </>
  );
}

export default App;
