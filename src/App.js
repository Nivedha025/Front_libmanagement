import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ClipLoader } from 'react-spinners';

import Filters from './components/Filters';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <ClipLoader color="#123abc" loading={true} />
      ) : (
        <Filters />
      )}
    </BrowserRouter>
  );
}

export default App;
