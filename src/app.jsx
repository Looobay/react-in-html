function Button({ text, count, onClick }) {
    return (
        <div>
            <button onClick={onClick}>
                {text} {count}
            </button>
        </div>
    );
}

function App() {
    function classic(){
        alert("Hello React!")
    }

    return (
        <div className="App">
            <header className="App-header">
                <title>React in HTML</title>
                <link rel="stylesheet" href="styles.css"/>
                <img src="./img/react.png" className="App-logo"/>
                <br/>
                <a className="App-link" href="https://github.com/Looobay/react-in-html" target="_blank" rel="noopener noreferrer">Github Page</a>
                <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Learn React</a>
                <Button className="App-button" text={'Classic React Button'} onClick={classic}></Button>
            </header>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(App());
