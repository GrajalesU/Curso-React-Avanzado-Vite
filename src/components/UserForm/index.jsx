import React from "react";
import useInputValue from "../../hooks/useInputValue";
export default function UserForm({ action, btnContent }) {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleForm = (e) => {
    e.preventDefault();
    action({
      variables: { input: { email: email.value, password: password.value } },
    });
  };
  return (
    <form onSubmit={handleForm} className="flex flex-col py-4 gap-4">
      <input
        type="email"
        placeholder="Email"
        // required
        {...email}
        className="border-[#ccc] border rounded py-2 px-1 block w-11/12 mx-auto"
      />
      <input
        type="password"
        placeholder="Password"
        // required
        {...password}
        className="border-[#ccc] border rounded py-2 px-1 block w-11/12 mx-auto"
      />
      <button
        type="submit"
        className="bg-[#758bff] rounded text-white w-11/12 mx-auto block text-center py-2 px-1 font-medium tracking-wider"
      >
        {btnContent}
      </button>
    </form>
  );
}
