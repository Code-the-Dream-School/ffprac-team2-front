import { useEffect, useState } from 'react';
import './App.css';
import { getAllData } from './util/index';

const URL = 'http://localhost:8000/api/v1/';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default App;
