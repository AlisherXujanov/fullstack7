## Install
```bash
npm install --save-dev @testing-library/react jest @types/jest prettier
```

- `@testing-library/react` - testing utility library
- `jest` - testing framework for javascript and React code
- `@types/jest` - type definitions for Jest for TypeScript and IDE intellisence
- `prettier` - used by Jest to format inline snapshots


## Adding .babelrc

We create a `.babelrc` file and put this code into it
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```
By adding this file, we can use ES6 features in our tests.
Which means, we can use `import` and `export` instead of `require` and `module.exports`.


## Writing Tests
1. Create a __tests__ folder inside the **src** folder: This is where you'll place all your test files. The __tests__ naming convention is recognized by Jest and it will automatically look into this folder for test files.
   
2. Create a test file for your component: If you're testing a component named MyComponent, create a file named **MyComponent.test.js** inside the __tests__ folder.

3. Write your tests: In **MyComponent.test.js**, you'll import React, your component, and any testing utilities you need. Then, you'll write your tests inside a test or it block.

```javascript
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App.js'

test('renders component correctly', () => {
    render(<App />);
    const element = screen.getByText(/some text/i);
    expect(element).toBeInTheDocument();
});
```
In this example, we're testing that MyComponent renders an element with the text "some text".

4. Run your tests: You can run your tests by running **npm test** or yarn test in your terminal. Jest will automatically find and run all tests in the __tests__ folder.


## Understanding the test function

- The `screen` object is imported from `@testing-library/react` and is used to query the DOM elements rendered by the component.
- The `getByText()` method is used to query the DOM for an element with the text "some text".
- The `toMatchInlineSnapshot()` is used so that we are don't have to write out and format the the expected output.
- The `toBeInTheDocument()` method is used to check if the element is in the DOM.
  
--- 

https://jestjs.io/docs/tutorial-react