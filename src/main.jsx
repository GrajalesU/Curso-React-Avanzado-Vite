import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContext from "./context/UserContext";
import "./index.css";

const client = new ApolloClient({
  uri: "https://petgram-api-grajalesu.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={{isAuth: true}}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UserContext.Provider>
  </React.StrictMode>
);
