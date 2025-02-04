import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

export default function App() {
  return (
    <div class="hero">
      <h1>CoStarAI</h1>
      <h2>This is CoStarAI</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);