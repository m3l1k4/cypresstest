import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { AppComponent } from './App';
it('renders without crashing', () => {
  //with react testing libry
  const { getByText } = render(<AppComponent
    message={'Learn Reacsst'}
  />)


  getByText("Learn React") 

  //with reactDOM
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
