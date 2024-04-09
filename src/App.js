import './App.css';

//Components (init in ./components/index.js)
import {Header, Footer} from "./components/"

import {Title} from "./components/"


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Title id="about-content">Чим ми займаємося</Title>
                <div className="block-content">
                    <p>"EcoSmart Innovations" займається розробкою та постачанням інноваційних екологічно чистих технологій і продуктів для сталого розвитку. Наша місія полягає в тому, щоб сприяти зменшенню впливу людської діяльності на навколишнє середовище та створенню більш екологічно збалансованого світу для майбутніх поколінь. Ми працюємо над розробкою енергоефективних технологій, зелених енергетичних рішень, а також просуваємо використання відновлювальних джерел енергії, таких як сонячна та вітрова енергія. Наші продукти допомагають клієнтам зменшувати свій вуглецевий слід, економити енергію та ресурси, і покращувати якість життя в цілому.</p>
                </div>
                <Title id="about-content">Ціни</Title>
                <Title id="about-content">Зворотній зв'язок</Title>
            </main>
            <Footer/>
        </div>
    );
}

export default App;