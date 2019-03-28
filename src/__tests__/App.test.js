import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows search box placeholder text', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the search input box holds the prefilled text
  // console.log(div.innerHTML);

  expect(div.innerHTML).toContain('autofills - backspace and press enter to clear');

  ReactDOM.unmountComponentAtNode(div);
});
