// e2e test for the App component
// e2e   =>  end to end testing

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App.js'

test("My first test", () => {
    render(<App />)
    const element = screen.getByText('about')
    expect(element).toBeInTheDocument()

    const element2 = screen.getByText('Хедж-фонд')
    expect(element2).toBeInTheDocument()
})