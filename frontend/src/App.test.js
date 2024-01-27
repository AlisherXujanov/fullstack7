import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('renders component correctly', () => {
  render(<MyComponent />);
  const element = screen.getByText(/some text/i);
  expect(element).toBeInTheDocument();
});