import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../modules/Counter'

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('counter increments the count', () => {
  window.localStorage.setItem('count', 0)
  const { container } = render(<Counter initial={0} step={1} />)
  const button = container.firstChild
  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
  fireEvent.click(button)
  expect(button.textContent).toBe('2')
})

test('reads and updates localstorage', () => {
  window.localStorage.setItem('count', 3)
  const { container, rerender } = render(<Counter initial={3} step={2} />)
  const button = container.firstChild
  expect(button.textContent).toBe('3')
  fireEvent.click(button)
  expect(button.textContent).toBe('5')
  rerender(<Counter />)
  expect(window.localStorage.getItem('count')).toBe('5')
})
