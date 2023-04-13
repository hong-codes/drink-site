// issues
// "if" portion doesn't work
// when searching and clicking the button again, new drinks show up at the bottom of previous searach instead of clearing, console log does work

let drinkData;

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){


  let drink = (document.querySelector('input').value).replace(/\s/g, "");

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)

    // clear previous searches
    // insert here

    // if portion doesn't work?? why?
    if(document.querySelector('input').value === null){
      alert("Sorry, the bartender is not familiar with the drink. Is there another drink that you'd like?");
    } else {
      document.querySelector('.cocktails').innerHTML = '';

      data.drinks.forEach( cocktail => {

        const card = document.createElement('div');
        card.className = 'drinkCard';
        document.querySelector('.cocktails').append(card);

        const drinkName = document.createElement('h2');
        drinkName.innerText = cocktail.strDrink;
        card.appendChild(drinkName);

        const drinkImage = document.createElement('img');
        drinkImage.src = cocktail.strDrinkThumb;
        card.appendChild(drinkImage);

        // create ingredients title
        const drinkIngrTitle = document.createElement("div");
        drinkIngrTitle.innerText = "Ingredients";
        card.appendChild(drinkIngrTitle);

        // create Instructions title
        const instructionsTitle = document.createElement('h3');
        instructionsTitle.innerText = "Instructions";
        card.appendChild(instructionsTitle);

        const drinkInstructions = document.createElement('p');
        drinkInstructions.innerText = cocktail.strInstructions.replace(/(\n|\r|\n\r)/gm,'');
        card.appendChild(drinkInstructions);
        
      })
    }
  })
  
  .catch(err => {
      console.log(`error ${err}`)
  });

}