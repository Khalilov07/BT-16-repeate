import React from 'react';

const Main = (props) => {

    console.log(props.sum);


    const date = new Date()


    return (
        <main>
            <h1>сумма {props.a} + {props.b} = {props.sum}</h1>
            <p>{date.toString()}</p>
        </main>
    );
};

export default Main;