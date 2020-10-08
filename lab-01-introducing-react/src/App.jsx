import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Greeting from './components/Greetings';


const App = () => {

    const [name, setName] = useState();
    return (
        <>
        <input
          onChange={({target: {value}}) => setName(value)}
          placeholder="Enter your name"
        />
        <Greeting name={name}/>
      </>
    );
};



export default App;