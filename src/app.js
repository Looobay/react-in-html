const {
  useState
} = React;
function Button({
  text,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, text));
}
function FunButton() {
  let [number, setNumber] = useState(0);
  function FunClick() {
    setNumber(number + 1);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, number), /*#__PURE__*/React.createElement("button", {
    onClick: FunClick
  }, "Funny lol"));
}
function App() {
  function classic() {
    alert("Hello React!");
  }
  function counting() {
    setCount(count + 1);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("title", null, "React in HTML"), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "styles.css"
  }), /*#__PURE__*/React.createElement("img", {
    src: "./img/react.png",
    className: "App-logo"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://github.com/Looobay/react-in-html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Github Page"), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://react.dev/learn",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"), /*#__PURE__*/React.createElement(Button, {
    className: "App-button",
    text: 'Classic React Button',
    onClick: classic
  }), /*#__PURE__*/React.createElement(FunButton, null)));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
