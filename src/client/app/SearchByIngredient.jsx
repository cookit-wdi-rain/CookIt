'use strict'

import React from 'react';

export default function SearchByIngredient(props) {
  const handleSubmit = event=>{
    event.preventDefault();

    const newRecipe ={
      ingredient: event.target.elements.ingredient_name.value
    }

    props.


  }
}
