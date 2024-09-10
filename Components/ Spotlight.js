import Image from 'next/image';

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h1>Spotlight</h1>
      <Image src={image} alt="Spotlight Art" width={300} height={300} />
      <p>{artist}</p>
    </div>
  );
}
