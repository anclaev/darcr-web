import { render, screen } from '@testing-library/react'

import App from './App'

test('render title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Darcr/i)
  expect(linkElement).toBeInTheDocument()
})
