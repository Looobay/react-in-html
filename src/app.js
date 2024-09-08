function Button({
  text,
  count,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, text, " ", count));
}
function App() {
  let is_red = false;
  function bg() {
    if (is_red) {
      document.body.style.backgroundColor = 'white';
      is_red = false;
    } else {
      document.body.style.backgroundColor = 'red';
      is_red = true;
    }
  }
  function classic() {
    alert("Hello React!");
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello from React in your browser!"), /*#__PURE__*/React.createElement(Button, {
    text: 'Classic React Button',
    onClick: classic
  }), /*#__PURE__*/React.createElement(Button, {
    text: 'Click for RED',
    onClick: bg
  }));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
