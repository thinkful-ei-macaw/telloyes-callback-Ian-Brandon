import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card
    title='test'
    content='also test' />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Cards as expected', () => {
  const tree = renderer
    .create(<Card
      key='5'
      title='title'
      content='content'
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});