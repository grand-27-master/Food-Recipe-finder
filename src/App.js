import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';

function App() {
  const [search,setSearch]=useState("Pizza");
  const [recipes,setRecipes]=useState([]);

  //API values
  const API_ID="12268dc1";
  const API_KEY="bfba4d5f38aac30e7cd9d8a384fee4ee";

  useEffect(()=>{
   getRecipes();
  });

  async function getRecipes()
  {
    const response=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    console.log(response);
    setRecipes(response.data.hits);
  }

  function onInputChange(e)
  {
    setSearch(e.target.value);
  }

  function onSearchChange()
  {
    getRecipes();
  }

  return (
    <div className="App">
      {/* <h1>Food Recipe</h1> */}
      <Header search={search} onInputChange={onInputChange} onSearchChange={onSearchChange}></Header>
      <div className="container"><Recipe recipes={recipes}></Recipe></div>
    </div>
  );
}

export default App;
