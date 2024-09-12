import { render, screen } from '@testing-library/react';
import ArtPiecePreview from './ArtPiecePreview';

test('renders art piece preview', () => {
  render(<ArtPiecePreview title="Art Title" artist="Artist Name" />);
  expect(screen.getByAltText('Art Title')).toBeInTheDocument();
  expect(screen.getByText('Art Title')).toBeInTheDocument();
  expect(screen.getByText('Artist Name')).toBeInTheDocument();
});
