import "./Header.css"


function MyComponent() {
    return (
        <div>
            <header className="App-header">
                <h1>GenIoTech Solutions</h1>
                <ul className="App-header-menu">
                    <li><a href="#about-content">Про нас</a></li>
                    <li><a href="#products-content">Про товари та послуги</a></li>
                    <li><a href="#contacts-content">Контакти</a></li>
                </ul>
            </header>
        </div>
    );
}

export default MyComponent;
