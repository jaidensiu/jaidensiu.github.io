import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'
import { ThemeProvider } from './contexts/theme'

test('renders the landing page', () => {
  const { container } = render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  )
  expect(container).toBeTruthy()
})
