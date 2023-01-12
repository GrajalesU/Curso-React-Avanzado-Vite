import { useUser } from "../../context/UserContext";

export default function User() {
  const { removeAuth } = useUser();
  return (
    <div>
      <h1 className="text-lg ml-4 font-semibold mb-8">User</h1>
      <button
        className="bg-[#758bff] rounded text-white w-11/12 mx-auto block text-center py-2 px-1 font-medium tracking-wider"
        onClick={removeAuth}
      >
        Logout
      </button>
    </div>
  );
}
