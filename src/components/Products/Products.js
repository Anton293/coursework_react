import "./Products.css"


function MyComponent({children}) {
    return (
        <div className="block-content">
            {children}
        </div>
    );
}

export default MyComponent;
