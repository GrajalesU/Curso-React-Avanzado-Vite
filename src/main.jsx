import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
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
  console.log(token);
  const authorization = token ? `bearer ${token}` : "";
  operation.setContext({
    headers: {
      authorization,
    },
  });

  return forward(operation);
});

const errorMiddleware = onError(({networkError, ...error}) => {

  console.log(error);
  if (networkError && networkError.result.code === "invalid_token") {
    sessionStorage.removeItem("token");
    window.location = "/login";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(errorMiddleware, concat(authMiddleware, httpLink)),
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
