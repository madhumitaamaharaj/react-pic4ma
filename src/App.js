import React,  { useContext, useEffect, createContext, useReducer,useState } from 'react';

import "./style.css";

export default function App() {
  return (
    <div>
   
<ul className="ul-body">
<li>{list.id}</li>

<li>{list.userId}</li>
<li>{list.title}</li>
<li>{list.body}</li>
</ul>
    </div>
  );
}
