import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Display from './components/DisplayTest'
import SavedList from './components/SavedList'

afterEach(rtl.cleanup);

// it('has tennis', () => {
//   const wrapper = rtl.render(
//     <App />
//   );
//   const element = wrapper.queryByText(/tennis/i);
//   expect(element).toBeInTheDocument();
// });

it('displays title', () => {
  const wrapper = rtl.render(
    <SavedList list={[]}/>
  )
  const element = wrapper.queryByText(/list/i);
  expect(element).toBeInTheDocument();
});


it('displays mockdata', () => {
  let data = [{"name":"Alex Morgan","country":"United States","searches":100,"id":0}];
  const wrapper = rtl.render(
    <Display data={data}/>
  )
  const element = wrapper.queryByText(/alex/i);
  expect(element).toBeInTheDocument();
});