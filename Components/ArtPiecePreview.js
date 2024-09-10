



export function ArtPiecePreview({image, title, artist}) {
    return (
       <div> <img src ={image} alt = {title}></img>
       <h2>{title}</h2>
       <p>{artist}</p>
       </div>
  
    )
}