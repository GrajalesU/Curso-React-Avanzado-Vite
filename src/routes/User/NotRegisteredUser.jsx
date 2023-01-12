import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import UserForm from "../../components/UserForm";
import { useUser } from "../../context/UserContext";

const REGISTER_USER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export default function NotRegisteredUser() {
  const navigate = useNavigate();
  const { activateAuth } = useUser();
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  if (loading)
    return (
      <div>
        <h2 className="font-semibold text-lg py-2 mb-8 ml-2">Register</h2>
        <Loader size="100px" />
      </div>
    );

  if (data) {
    activateAuth(data.signup);
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>PetGram | Register</title>
      </Helmet>
      <div>
        <h2 className="font-semibold text-lg py-2 ml-2">Register</h2>
        <UserForm action={registerUser} btnContent={"Registrarse"} />
        {error && (
          <span className="text-red-600 font-bold ml-4">
            Oh no, {error.message} :c
          </span>
        )}
      </div>
    </>
  );
}
