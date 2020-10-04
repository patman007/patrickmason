var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily_food_quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily_food_quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily_food_quantity": 50
    }
]

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const foodA = a.daily_food_quantity;
    const foodB = b.daily_food_quantity;

    //Another way to sort by daily food quantity
    // return a.daily_food_quantity - b.daily_food_quantity;
  
    let comparison = 0;
    if (foodA > foodB) {
      comparison = 1;
    } else if (foodA < foodB) {
      comparison = -1;
    }
    return comparison;
  }
  
  myPets.sort(compare);