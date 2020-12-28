import React from 'react';

function Header(props)
{
    return (
        <div className="header">
        <h1 className="display-1"><span class="material-icons brand-icon">restaurant</span>Food Recipes</h1>
        <div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Find Recipe" aria-label="Find Recipe" aria-describedby="basic-addon2" value={props.search} onChange={props.onInputChange}></input>
    <button className="btn btn-dark" onClick={props.onSearchChange}>GO!</button>
    </div>
        </div>
    ) 
}

export default Header;