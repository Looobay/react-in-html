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
    let is_red = false
    function bg() {
        if (is_red){
            document.body.style.backgroundColor = 'white';
            is_red = false
        } else {
            document.body.style.backgroundColor = 'red';
            is_red = true
        }
    }

    function classic(){
        alert("Hello React!")
    }

    return (
        <div>
            <h1>Hello from React in your browser!</h1>
            <Button text={'Classic React Button'} onClick={classic}></Button>
            <Button text={'Click for RED'} onClick={bg}></Button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(App());
