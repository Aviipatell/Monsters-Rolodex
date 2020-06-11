import React from 'react';
import './searchbox.styles.css';

// functional components do not have access to state, nor lifecycle methods
// functional components are just simply to render some html given some props
export const SearchBox = ({placeholder, handleChange}) => (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange}/>

)