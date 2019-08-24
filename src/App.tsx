import React from 'react';
import Layer from './components/layer'

const App: React.FC = () => {
  return (
    <div>
      <h1>{"React and raw HTMLElement mille-feuille"}</h1>
      <p>
        {"See code at "}
        <a href={'https://github.com/kamataryo/sandbox-react-dom-portal'}>
          {'github.com/kamataryo/sandbox-react-dom-portal'}
        </a>
        {'.'}
      </p>
      <Layer></Layer>
    </div>
  );
}

export default App;
