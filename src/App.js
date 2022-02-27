import React from 'react'
import { NavBar, ItemListContainer, ItemDetailContainer } from './Components'
import './App.css';

export function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer productId={1004}/>
    </div>
  )
}
export default App
