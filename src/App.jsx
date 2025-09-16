import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ProductList from '../pages/ProductList'
import DefaultLayout from '../layout/DefaulLayout'
import GlobalContextProvider from "../context/GlobalContext"
import './App.css'

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
