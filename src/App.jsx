
import React from 'react'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import "./main.css"
import ItemListContainer from './components/ItemListContainer'






const App = () => {
  document.body.style.backgroundColor ='#242a30'
return (
  <div id="app">
     <NavBar/>
    
    <ItemListContainer greeting="Bienvenidos a MBA moda" />
  </div>
  );
}

export default App
