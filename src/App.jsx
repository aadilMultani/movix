import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchDatafromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/slice/homeSlice';

// Component 
import Home from './pages/home/Home';
import Detail from './pages/details/Detail';
import SearchResult from './pages/Search Result/searchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/pageNotFound';
import Header from './component/header/header';
import Footer from './component/footer/footer';

function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig()
  }, []);

  const fetchApiConfig = () => {
    fetchDatafromApi('/configuration')
      .then((res) => {

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url))
      });
  }
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:mediaType/:id' element={<Detail />}></Route>
        <Route path='/search/:query' element={<SearchResult />}></Route>
        <Route path='/explore/:mediaType' element={<Explore />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
