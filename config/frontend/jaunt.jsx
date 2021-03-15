import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore()
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Jaunt! store={store}</h1>, root);
});

