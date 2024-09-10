import { ArtPiecePreview } from "./ArtPiecePreview"




export function Spotlight({image,artist}) {

  return(
    <>
      <img src={image} alt="Spotlight Image" />     
      <p>{artist}</p>

    </>
  )
}

