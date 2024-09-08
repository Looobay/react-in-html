function AlertButton({
  text
}) {
  function handleClick() {
    alert("Hello!");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, text);
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello from React in your browser!"), /*#__PURE__*/React.createElement(AlertButton, {
    text: "React alert"
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());
