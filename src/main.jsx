import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import "./index.css";

const httpLink = new HttpLink({
  uri: "https://petgram-api-grajalesu.vercel.app/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  const authorization = token ? `bearer ${token}` : "";
  operation.setContext({
    headers: {
      authorization,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UserProvider>
  </React.StrictMode>
);
