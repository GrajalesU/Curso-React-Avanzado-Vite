import { Helmet } from "react-helmet";
import Favorites from "../../components/Favorites";

export default function Fav() {
  return (
    <>
      <Helmet>
        <title>PetGram | Favorites</title>
      </Helmet>
      <div>
        <h1 className="text-lg ml-4 font-semibold">Favorites</h1>
        <Favorites />
      </div>
    </>
  );
}
