import { render, screen } from '@testing-library/react'
import ActionMenu from '../index'

describe('ActionMenu', () => {
  test('should render correctly', () => {
    const options = [
      {
        label: 'test',
        action: jest.fn()
      },
      {
        label: 'editTest',
        action: jest.fn()
      },
    ]
    
    render(<ActionMenu options={options}/>)

    const actionMenuButton = screen.getByTestId('action-menu-button')
    expect(actionMenuButton).toBeInTheDocument()
  })
})