// Har doim srcni ichida index.js yaratiladi

import React from "react"; // reactni narsalarini olib keltiradi
import ReactDOM from "react-dom"; // rendor qlish uchun kerak

import App from "./components/App.js";

ReactDOM.render(<App />, document.querySelector("#root"));
