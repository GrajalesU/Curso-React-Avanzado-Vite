import { Helmet } from "react-helmet";
import footPrint from "../../assets/footPrint.jpg";
import { useUser } from "../../context/UserContext";
import { ListOfSquarePhotoCards } from "../../components/ListOfPhotoCards";

export default function User() {
  const { removeAuth } = useUser();
  return (
    <>
      <Helmet>
        <title>PetGram | User</title>
      </Helmet>
      <div className="flex flex-col gap-3">
        <div className="flex">
          <div className=" relative mx-auto ">
            <img
              src={footPrint}
              alt="profile"
              className="object-contain mx-auto w-40 border border-solid border-[#758bff] rounded-full ml-4"
            />
            <div className="absolute bg-[#758bff] text-center w-6 rounded-full right-4 top-32 font-bold ">
              +
            </div>
          </div>
          <div className="grow flex flex-col gap-3">
            <h1 className="text-xl ml-4 font-bold mb-1 pl-5">
              Apollo Salchicha
            </h1>
            <span className="text-left pl-12 text-gray-400">
              Cocker Spaniel
            </span>
            <div className="flex gap-2 text-sm">
              <span className="pl-12 font-semibold">Owner:</span>
              <h2>Grajales Family</h2>
            </div>
            <span className="text-sm font-bold text-left pl-12">
              @salchichudo
            </span>
            <a
              href="grajalesu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-left pl-10 text-[#4161ffbd] hover:text-[#2c4fff]"
            >
              Click here to see my portfolio
            </a>
            <a href="http://"></a>
          </div>
        </div>
        <button className="bg-[#758cffbd] py-1 px-1 rounded w-28 self-start ml-8 text-sm font-semibold mb-6">
          Edit profile
        </button>
        <button
          className="bg-[#758bff] rounded text-white w-11/12 mx-auto block text-center py-2 px-1 font-medium tracking-wider hover:bg-[#5471ff] "
          onClick={removeAuth}
        >
          Logout
        </button>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Followers</span>
            <span>120k</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Following</span>
            <span>120k</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Posts</span>
            <span>34</span>
          </div>
        </div>
        <hr className="w-11/12 mx-auto" />
        <ListOfSquarePhotoCards />
      </div>
    </>
  );
}
