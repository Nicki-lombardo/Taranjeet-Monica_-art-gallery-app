import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
// import "@testing-library/jest-dom/extend-expect";

describe("Spotlight Component", () => {
  const mockArtPiece = {
    imageSource: "/path/to/image.jpg",
    title: "Art Title",
    artist: "Artist Name",
  };

  const mockOnToggleFavorite = jest.fn();

  test('renders "No Spotlight Available for now!" when no artPiece is provided', () => {
    render(<Spotlight />);
    expect(
      screen.getByText("No Spotlight Available for now! 😞")
    ).toBeInTheDocument();
  });

  test("renders art piece details when artPiece is provided", () => {
    render(
      <Spotlight
        artPiece={mockArtPiece}
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );
    expect(screen.getByAltText("Art Title")).toBeInTheDocument();
    expect(screen.getByText("Art Title")).toBeInTheDocument();
    expect(screen.getByText("Artist Name")).toBeInTheDocument();
  });
});
