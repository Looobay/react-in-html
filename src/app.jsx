function Button({ text }){
    return(
        <button>
            {text}
        </button>
    )
}

function App(){
    return(
        <div>
            <h1>Hello from React in your browser!</h1>
            <Button test="Hello React!"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());