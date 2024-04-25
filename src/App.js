import './App.css';

//Components (init in ./components/index.js)
import {Header, AboutUs, Products, Contacts, Footer} from "./components/"
import {Title} from "./components/"


//TODO: Адаптивність
//TODO: відгуки клієнтів
//TODO:

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Title id="about-content">Про нас</Title>
                <AboutUs>
                    <b>GenIoTech Solutions</b> - це лідер у сфері інноваційних технологій, який спеціалізується на розробці
                    та впровадженні передових рішень у різних галузях. Ми поєднуємо технічну експертизу та
                    креативність для створення продуктів та послуг, які змінюють світ навколо нас.
                </AboutUs>
                <Title id="products-content">Про товари та послуги</Title>
                <Products>
                    <p><h3>Розробка програмного забезпечення</h3> Від веб-додатків до мобільних додатків, ми створюємо
                        програмні продукти відповідно до вашого бізнесу.
                    </p>
                    <br/>
                    <p><h3>Інтернет речей (IoT)</h3> Розробка і впровадження рішень IoT для забезпечення зручності та
                        ефективності вашого підприємства.
                    </p>
                    <br/>
                    <p><h3>Штучний інтелект</h3> Розробка інтелектуальних систем, які забезпечують автоматизацію та
                        оптимізацію
                        бізнес-процесів.
                    </p>
                    <br/>
                    <p><h3>Консультування з технологій</h3> Наші експерти допомагають вам визначити оптимальні
                        технологічні
                        стратегії та вирішити складні завдання.
                    </p>
                    <br/>
                </Products>
                <Title id="contacts-content">Контакти</Title>
                <Contacts _filepath_business_card="business_card.png">
                    <p>Вул. Інноваційна, 9999, м. Київ, Україна</p>
                    <p>+380 99 123 4567</p>
                    <p>example@gmail.com</p>
                </Contacts>
            </main>
            <Footer/>
        </div>
    );
}

export default App;