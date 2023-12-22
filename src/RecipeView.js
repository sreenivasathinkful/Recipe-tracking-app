import React from "react";

function RecipeView( {recipe, handleDeleteRecipe}) {
  
  return (
    <tr>
        <td><p>{recipe.name}</p></td>
        <td><p>{recipe.cuisine}</p></td>
        <td><img src={recipe.photo} alt="Recipe"/></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" type="button" onClick={handleDeleteRecipe}>Delete</button></td>
    </tr>
  );
}

export default RecipeView;