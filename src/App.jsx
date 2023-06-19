import React, { useState, useEffect, createContext } from 'react'
import Header from './Components/Header/Header';
import InputSearch from './Components/InputSearch/InputSearch';
import MealsContainer from './Components/MealsContainer/MealsContainer';
import axios from 'axios';

export const MainContext = createContext()

const App = () => {
  
  const [search, setSearch] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
    .then(res => {
      setSearch(res.data.meals)
      console.log(res.data.meals)
    })
  }, [])

  return (
    <MainContext.Provider value={{search, setSearch}}>
      <Header />
      <InputSearch search={search} setSearch={setSearch}/>
    </MainContext.Provider>
  )
}

export default App