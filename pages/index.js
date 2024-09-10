import useSWR from "swr";
import { ArtPiecePreview } from "@/Components/ArtPiecePreview";
import {Spotlight} from "@/Components/Spotlight";
import { ArtPieces } from "@/Components/ArtPieces";



const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {

const {data, error} = useSWR("https://example-apis.vercel.app/api/art",fetcher);
if (error) return <div>There is some problem</div>
if(!data) return <div>Loading..........</div>

// we need to add random pices for the spotlight (for the use story 2.)
const spotlightPiece = data.length > 0 ? data[Math.floor(Math.random() * data.length)] : null;

  return (
    <div>
      <Spotlight image={spotlightPiece.image} artist={spotlightPiece.artist}  />
      <ArtPieces pieces = {data} />
    </div>
  );
}
