import React from 'react';
import Header from './Header';

export default ({ children }) => {
    return (
       <div>
           <Header/>
           React App
           { children }
       </div>
    )
};