import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Title from './Component/Title';
// import Paragraphe from './Component/Paragraphe';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <Title nb={2}/> */}
    {/* <Paragraphe text={'Even when I walk through the darkest valley, I will not be afraid.'}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
