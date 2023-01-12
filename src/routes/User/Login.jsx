import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import UserForm from "../../components/UserForm";
import { useUser } from "../../context/UserContext";

const LOG_USER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export default function Login() {
  const [login, { data, loading, error }] = useMutation(LOG_USER);
  const { activateAuth } = useUser();
  const navigate = useNavigate();

  if (loading)
    return (
      <div>
        <h2 className="font-semibold text-lg py-2 mb-8 ml-2">Login</h2>
        <Loader size="100px" />
      </div>
    );

  if (data) {
    activateAuth(data.login);
    navigate("/");
  }

  return (
    <div>
      <h2 className="font-semibold text-lg py-2 ml-2">Login</h2>
      <UserForm action={login} btnContent={"Inicia sesión"} />

      <span className="text-red-600 font-bold ml-4">
        {error && `Oh no, ${error.message} :c`}
      </span>

      <div className="ml-2">
        <span>Don't have an account?</span>
        <Link to={"/register"} className="ml-3 font-semibold text-[#758bff]">
          Register
        </Link>
      </div>
    </div>
  );
}
