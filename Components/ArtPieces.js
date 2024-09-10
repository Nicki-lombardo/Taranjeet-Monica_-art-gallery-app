import { ArtPiecePreview } from "./ArtPiecePreview"



export function ArtPieces ({pieces}) {
  return (
   <div>
    {pieces.map((pieces)=> (
      <ArtPiecePreview 
      key = {pieces.div}
      image={pieces.image}
      title={pieces.title}
      artist={pieces.artist}
      />

    ))};
   </div>
  )
}