import React from 'react'
import { NavBar, Footer } from './Components'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ProductDetailPage } from './Pages/ProductDetailPage';
import { CategoryPage } from './Pages/CategoryPage';
import { CartPage } from './Pages/CartPage';

export function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div>
            
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path='/product/:productId'>
              <ProductDetailPage />
            </Route>

            <Route path='/category/:categoryId'>
              <CategoryPage />
            </Route>

            <Route path='/cart'>
              <CartPage />
            </Route>

          </div>
          <Footer />
        </div>
      </BrowserRouter>
  )
}
export default App
