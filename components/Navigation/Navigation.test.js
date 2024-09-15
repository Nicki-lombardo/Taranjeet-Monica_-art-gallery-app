import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders navigation links correctly", () => {
  
  useRouter.mockImplementation(() => ({
    pathname: "/",
  }));

  render(<Navigation />);

  expect(screen.getByText("Spotlight")).toBeInTheDocument();
  expect(screen.getByText("Art Pieces")).toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});

test("does not render Art Pieces link on /art-pieces path", () => {
  useRouter.mockImplementation(() => ({
    pathname: "/art-pieces",
  }));

  render(<Navigation />);

  expect(screen.getByText("Spotlight")).toBeInTheDocument();
  expect(screen.queryByText("Art Pieces")).not.toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});

test("does not render Favorites link on /favorites path", () => {
  useRouter.mockImplementation(() => ({
    pathname: "/favorites",
  }));

  render(<Navigation />);

  expect(screen.getByText("Spotlight")).toBeInTheDocument();
  expect(screen.getByText("Art Pieces")).toBeInTheDocument();
  expect(screen.queryByText("Favorites")).not.toBeInTheDocument();
});
