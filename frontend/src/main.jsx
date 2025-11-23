import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { persistore, store } from "./Redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";
/*********************************************** */
const quireyclient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <QueryClientProvider client={quireyclient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>

);
