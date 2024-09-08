function AlertButton({ text }){
    function handleClick(){
        alert("Hello!")
    }

    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}



function App(){
    return(
        <div>
            <h1>Hello from React in your browser!</h1>
            <AlertButton text="React alert"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());