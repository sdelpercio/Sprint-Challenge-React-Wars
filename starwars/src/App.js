import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardContainer from './components/CardContainer';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      }) 
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer parentData={data} />
    </div>
  );
}

export default App;
