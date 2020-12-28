import React from 'react';

function Recipe(props)
{
    return (
       <div className="row">
           {
           props.recipes.map(recipe =>(
               <div className="col-md-3">
                   <div className="card">
                       <img alt="food" src={recipe.recipe.image} className="img-fluid"></img>
                       <div className="card-body width-auto"><h4>{recipe.recipe.label}</h4></div>
                   </div>
                   <ul className="list-group list-group-flush"></ul>
                   {
                       recipe.recipe.ingredientLines.map(ingredient=>(
                           <li className="list-group-item">{ingredient}</li>
                       ))
                   }
               </div>
           ))
}
       </div>
    ) 
}

export default Recipe;