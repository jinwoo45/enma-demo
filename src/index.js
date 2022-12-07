import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import store from "./redux/store.js";
import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "react-query";
// const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

root.render(
  // <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </BrowserRouter>
  </Provider>
  // </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
