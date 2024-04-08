import "./Header.css"

import {React, useState} from 'react';

import myImage from './logo512.png';


//контактні данні, логотип, форма зворотнього зв'язоку, відгуки клієнтів, про компанію та чим займається,
// розділ з цінами(якщо багато їх то по категоріям розділення), новини


function MyButton({onClick, count}) {
    return (
        <>
            <button onClick={onClick}>I'm a button {count}</button>
        </>
    );
}


function MyComponent() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <header className="App-header">
                <img src={myImage} alt="Моє зображення" width="200px"/>
                <MyButton count={count} onClick={handleClick}/>
                <a href="https://google.com">url google</a>
            </header>
        </div>
);
}

export default MyComponent;
