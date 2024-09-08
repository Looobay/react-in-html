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

let num = 0
function AddButton(){
    function addOneClick(){
        num+=1
    }

    return(
        <button onClick={addOneClick}>
            Click to add!
        </button>
    )
}


function App(){
    return(
        <div>
            <h1>Hello from React in your browser!</h1>
            <h2>{num}</h2>
            <AddButton/>
            <AlertButton text="React alert"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());