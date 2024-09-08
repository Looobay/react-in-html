function Button({
  text
}) {
  return /*#__PURE__*/React.createElement("button", null, text);
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello from React in your browser!"), /*#__PURE__*/React.createElement(Button, {
    test: "Hello React!"
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());
