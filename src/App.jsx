import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ProductList from '../pages/ProductList'
import DefaultLayout from '../layout/DefaulLayout'
import GlobalContextProvider from "../context/GlobalContext"
import AboutPage from "../pages/AboutPage"
import ContactsPage from "../pages/ContactsPage"
import ProductDetails from "../components/ProductsDetails"
import Wishlist from "../components/Wishlist"
import ComparePage from "../pages/CoparePage"
import './App.css'

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/compare/:id1/:id2" element={<ComparePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
