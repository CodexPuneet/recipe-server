const {Router}=require("express");
const axios = require('axios');
//Router
const dishesRouter=Router();


 
dishesRouter.get("/complexSearch", async (req, res) => {
  try {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=713bf03046854b058e72c51a8bfdcee5`;

    const { query, cuisine } = req.query;

    if (cuisine !== undefined && cuisine.length > 0) {
      url += `&cuisine=${cuisine}`;
    } else if (query !== undefined && query.length > 0) {
      url += `&query=${query}`;
    }

    console.log(url);

    const response = await axios.get(url); // Make the API request

    console.log(response.data);
    return res.send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Some error occurred');
  }
});



dishesRouter.get("/:id/information", async (req, res) => {
  const recipeId = req.params.id;
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=713bf03046854b058e72c51a8bfdcee5`;

  try {
    const response = await axios.get(url); // Make the API request
    const data = response.data;
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Some error occurred');
  }
});

 






module.exports=dishesRouter