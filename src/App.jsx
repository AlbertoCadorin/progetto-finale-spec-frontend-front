import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import DefaultLayout from './layout/DefaulLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
