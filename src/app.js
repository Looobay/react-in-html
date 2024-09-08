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
function AddButton() {
  let num = 0;
  function addOneClick() {
    num += 1;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, num), /*#__PURE__*/React.createElement("button", {
    onClick: addOneClick
  }, "Click to add!"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello from React in your browser!"), /*#__PURE__*/React.createElement(AddButton, null), /*#__PURE__*/React.createElement(AlertButton, {
    text: "React alert"
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());
