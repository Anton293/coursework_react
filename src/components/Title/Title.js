import "./Title.css"


function MyComponent({children, id}) {
    return (
            <h1 id={id} className="App-Title-Content-Block">{children}</h1>
    );
}

export default MyComponent;
