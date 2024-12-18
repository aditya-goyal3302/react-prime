import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
import route from './router';

function App() {
  const content = useRoutes(route())
  return (
    
        content
  );
}

export default App;
