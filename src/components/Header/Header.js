import "./Header.css"

import myImage from './logo512.png';


//контактні данні, логотип, форма зворотнього зв'язоку, відгуки клієнтів, про компанію та чим займається,
// розділ з цінами(якщо багато їх то по категоріям розділення), новини


function MyComponent() {
    return (
        <div>
            <header className="App-header">
                <h1>EcoSmart Innovations</h1>
                <img src={myImage} alt="Logo" width="50px"/>
                <a href="#about-content">Чим ми займаємося</a>
                <a href="#about-content">Ціни</a>
                <a href="#about-content">Про нас</a>
                <a href="#about-content">Зворотній зв'язок</a>
            </header>
        </div>
    );
}

export default MyComponent;
