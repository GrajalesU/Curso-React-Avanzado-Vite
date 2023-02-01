import { Helmet } from "react-helmet";
import Favorites from "../../components/Favorites";

export default function Fav() {
  return (
    <>
      <Helmet>
        <title>PetGram | Favorites</title>
      </Helmet>
      <div>
        <h1 className="text-xl ml-4 font-semibold mb-4">Favorites</h1>
        <hr className="mx-auto w-[98%]" />
        <Favorites />
      </div>
    </>
  );
}
