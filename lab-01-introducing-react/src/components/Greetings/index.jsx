import React from 'react';


function Greeting(props) {
    return (

        <div>
            <header>
                <h1 style={{color:"red"},{backgroundColor: "tan"}}>Hi, {props.name}, Hows you doin!!! bruh</h1>
            </header>
        </div>

    );
}

export default Greeting;