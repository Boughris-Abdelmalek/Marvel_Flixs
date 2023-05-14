import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import Layout from "./app/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
);
