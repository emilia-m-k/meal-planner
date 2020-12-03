const RECIPES = [
  {
    id: 1,
    name: "Tomato soup",
    instruction: "Put everything inside pot and boil",
    ingredients: [
      { name: "tomatoes", quantity: 500, unit: "gram" },
      { name: "carrots", quantity: 2, unit: "piece" },
      { name: "water", quantity: 1, unit: "liter" },
    ],
    tags: ["soup", "tomatoes", "quick"],
    type: ["dinner"],
    servings: 2,
    active: true,
    deleted: false,
  },
  {
    id: 2,
    name: "Pea soup",
    instruction: "Put everything inside pot and boil",
    ingredients: [
      { name: "peas", quantity: 250, unit: "gram" },
      { name: "carrots", quantity: 2, unit: "piece" },
      { name: "water", quantity: 1, unit: "liter" },
      { name: "potatoes", quantity: 200, unit: "gram" },
    ],
    tags: ["soup", "quick"],
    type: ["dinner"],
    servings: 2,
    active: false,
    deleted: false,
  },
  {
    id: 3,
    name: "Oatmeal",
    instruction: "Put everything inside pot and boil",
    ingredients: [
      { name: "oats", quantity: 50, unit: "gram" },
      { name: "oats milk", quantity: 200, unit: "milliliter" },
      { name: "dried cranberries", quantity: 10, unit: "gram" },
      { name: "banana", quantity: 1, unit: "piece" },
    ],
    tags: ["quick", "easy"],
    type: ["breakfast"],
    servings: 2,
    active: true,
    deleted: false,
  },
  {
    id: 4,
    name: "Sandwiches with mackerel",
    instruction:
      "Prepare rolls, cut, put on butter and lay the mackerel on the roll.",
    ingredients: [
      { name: "mackerel", quantity: 200, unit: "gram" },
      { name: "rolls", quantity: 4, unit: "piece" },
      { name: "butter", quantity: 20, unit: "gram" },
    ],
    tags: ["quick", "sandwich"],
    type: ["breakfast", "supper", "lunch"],
    servings: 2,
    active: false,
    deleted: false,
  },
  {
    id: 5,
    name: "Koshari",
    instruction:
      "Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).\r\nNow, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.\r\nNow make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.\r\nCover the chickpeas and warm in the microwave briefly before serving.\r\n\r\nMake the crispy onion topping. \r\n\r\nSprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.\r\nIn a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).",
    ingredients: [
      { name: "Brown Lentils", quantity: 1.5, unit: "cups ", id: 1 },
      { name: "Rice", quantity: 1.5, unit: "cups ", id: 2 },
      { name: "Coriander", quantity: 0.5, unit: "tsp", id: 3 },
      { name: "Macaroni", quantity: 2, unit: "cups ", id: 4 },
      { name: "Chickpeas", quantity: 1, unit: "Can", id: 5 },
      { name: "Onion", quantity: 1, unit: "large", id: 6 },
      { name: "Salt", quantity: 1, unit: "Sprinking", id: 7 },
      { name: "Vegetable Oil", quantity: 0.5, unit: "cup ", id: 8 },
    ],
    tags: ["Egyptian", "Vegetarian"],
    type: [],
    servings: 2,
    active: false,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
  },
  {
    id: 6,
    name: "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
    instruction:
      "\r\nServes 2\r\n\r\n\r\n1. \r\n\r\nAdjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Dice sweet potatoes into 1/2-inch pieces. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack for 12 minutes (we'll roast the zucchini then). \r\n\r\n\r\n2. \r\n\r\nMeanwhile, halve and core apple; thinly slice into half-moons. Peel and finely chop garlic. Quarter lemon. Trim and halve zucchini lengthwise; cut crosswise into 1/2-inch-thick half-moons. Toss on a second baking sheet with a drizzle of oil and a pinch of salt and pepper. Set aside. \r\n\r\n\r\n3. \r\n\r\nPat pork dry with paper towels and season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook until browned and cooked through, 4-5 minutes per side. Turn off heat; transfer to a plate. \r\n\r\n\r\n4. \r\n\r\nOnce sweet potatoes have roasted 12 minutes, transfer baking sheet with zucchini to middle rack and continue roasting until both veggies are browned and softened, 12-15 minutes more. \r\n\r\n\r\n5. \r\n\r\nMeanwhile, melt 1 TBSP butter (2 TBSP for 4 servings) in pan used for pork over medium-high heat. Add apple and season with salt and pepper. Cook, scraping up any browned bits from bottom of pan, until apple is slightly softened, 2-3 minutes. Add garlic; cook until fragrant, 30 seconds. Add 1/z cup water (3/4 cup for 4), stock concentrate, and 11/2 tsp sugar (3 tsp for 4). Cook, stirring, until sauce has thickened and apple is very tender, 3-5 minutes. Season with salt and pepper. \r\n\r\n\r\n6. \r\n\r\nRemove pan with apple from heat; stir in 1 TBSP butter (2 TBSP for 4 servings) and a squeeze of lemon juice. Divide pork, zucchini, and sweet potatoes between plates. Top pork with glazed apple sauce. Top zucchini with a squeeze of lemon juice. ",
    ingredients: [
      { name: "Potatoes", quantity: "", unit: "2", id: 1 },
      { name: "Apples", quantity: "", unit: "1", id: 2 },
      { name: "Garlic", quantity: "", unit: "2 cloves", id: 3 },
      { name: "Lemon", quantity: "", unit: "1", id: 4 },
      { name: "Pork", quantity: "", unit: "2", id: 5 },
      { name: "Zucchini", quantity: "", unit: "1", id: 6 },
      { name: "Chicken Stock", quantity: "", unit: "1", id: 7 },
      { name: "Vegetable Oil", quantity: "", unit: "1 tbsp", id: 8 },
      { name: "Sugar", quantity: "", unit: "1 1/2 tsp ", id: 9 },
      { name: "Butter", quantity: "", unit: "2 tbsp", id: 10 },
    ],
    tags: ["American", "Pork"],
    type: [],
    servings: 2,
    active: false,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
  },
  {
    id: 7,
    name: "Salmon Eggs Eggs Benedict",
    instruction:
      "First make the Hollandaise sauce. Put the lemon juice and vinegar in a small bowl, add the egg yolks and whisk with a balloon whisk until light and frothy. Place the bowl over a pan of simmering water and whisk until mixture thickens. Gradually add the butter, whisking constantly until thick – if it looks like it might be splitting, then whisk off the heat for a few mins. Season and keep warm.\r\n\r\nTo poach the eggs, bring a large pan of water to the boil and add the vinegar. Lower the heat so that the water is simmering gently. Stir the water so you have a slight whirlpool, then slide in the eggs one by one. Cook each for about 4 mins, then remove with a slotted spoon.\r\n\r\nLightly toast and butter the muffins, then put a couple of slices of salmon on each half. Top each with an egg, spoon over some Hollandaise and garnish with chopped chives.",
    ingredients: [
      { name: "Eggs", quantity: "", unit: "4", id: 1 },
      { name: "White Wine Vinegar", quantity: "", unit: "2 tbs", id: 2 },
      { name: "English Muffins", quantity: "", unit: "2", id: 3 },
      { name: "Butter", quantity: "", unit: "To serve", id: 4 },
      { name: "Smoked Salmon", quantity: "", unit: "8 slices", id: 5 },
      { name: "Lemon Juice", quantity: "", unit: "2 tsp", id: 6 },
      { name: "White Wine Vinegar", quantity: "", unit: "2 tsp", id: 7 },
      { name: "Egg", quantity: "", unit: "3 Yolkes", id: 8 },
      { name: "Unsalted Butter", quantity: "", unit: "125g", id: 9 },
    ],
    tags: ["American", "Breakfast"],
    type: [],
    servings: 2,
    active: false,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/1550440197.jpg",
  },
  {
    id: 8,
    name: "Fruit and Cream Cheese Breakfast Pastries",
    instruction:
      "Preheat oven to 400ºF (200ºC), and prepare two cookie sheets with parchment paper. In a bowl, mix cream cheese, sugar, and vanilla until fully combined. Lightly flour the surface and roll out puff pastry on top to flatten. Cut each sheet of puff pastry into 9 equal squares. On the top right and bottom left of the pastry, cut an L shape approximately ½ inch (1 cm) from the edge.\r\nNOTE: This L shape should reach all the way down and across the square, however both L shapes should not meet at the ends. Your pastry should look like a picture frame with two corners still intact.\r\nTake the upper right corner and fold down towards the inner bottom corner. You will now have a diamond shape.\r\nPlace 1 to 2 teaspoons of the cream cheese filling in the middle, then place berries on top.\r\nRepeat with the remaining pastry squares and place them onto the parchment covered baking sheet.\r\nBake for 15-20 minutes or until pastry is golden brown and puffed.\r\nEnjoy!\r\n",
    ingredients: [
      { name: "Cream Cheese", quantity: "", unit: "1 1/4 oz ", id: 1 },
      { name: "Sugar", quantity: "", unit: "1 1/4 cup", id: 2 },
      { name: "Vanilla Extract", quantity: "", unit: "1 teaspoon", id: 3 },
      { name: "Flour", quantity: "", unit: "", id: 4 },
      { name: "Puff Pastry", quantity: "", unit: "2", id: 5 },
      { name: "Strawberries", quantity: "", unit: "", id: 6 },
      { name: "Raspberries", quantity: "", unit: "", id: 7 },
      { name: "Blackberries", quantity: "", unit: "", id: 8 },
    ],
    tags: ["American", "Breakfast"],
    type: [],
    servings: 2,
    active: false,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
  },
  {
    id: 9,
    name: "Ma Po Tofu",
    instruction:
      "Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice.",
    ingredients: [
      { name: "Tofu", quantity: "", unit: "450g", id: 1 },
      { name: "Minced Beef", quantity: "", unit: "100g ", id: 2 },
      { name: "Sesame Seed Oil", quantity: "", unit: "1/2 tbs", id: 3 },
      { name: "Doubanjiang", quantity: "", unit: "1 1/2 tsp ", id: 4 },
      { name: "Fermented Black Beans", quantity: "", unit: "1/2 tsp", id: 5 },
      { name: "Pepper", quantity: "", unit: "1 tbs", id: 6 },
      { name: "Salt", quantity: "", unit: "1/2 tsp", id: 7 },
      { name: "Sichuan pepper", quantity: "", unit: "1/2 tsp", id: 8 },
      { name: "Soy Sauce", quantity: "", unit: "1 tbs", id: 9 },
      { name: "Water", quantity: "", unit: "400ml", id: 10 },
      { name: "Olive Oil", quantity: "", unit: "2 tbs", id: 11 },
      { name: "Scallions", quantity: "", unit: "2 chopped", id: 12 },
      { name: "Spring Onions", quantity: "", unit: "4", id: 13 },
      { name: "Garlic", quantity: "", unit: "2 cloves chopped", id: 14 },
      { name: "Ginger", quantity: "", unit: "4 sliced", id: 15 },
      { name: "Water", quantity: "", unit: "2 1/2 tbs", id: 16 },
      { name: "Cornstarch", quantity: "", unit: "1 tbs", id: 17 },
    ],
    tags: ["Chinese", "Beef"],
    type: [],
    servings: 2,
    active: false,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/1525874812.jpg",
  },
  {
    id: 10,
    name: "Spinach & Ricotta Cannelloni",
    instruction:
      "First make the tomato sauce. Heat the oil in a large pan and fry the garlic for 1 min. Add the sugar, vinegar, tomatoes and some seasoning and simmer for 20 mins, stirring occasionally, until thick. Add the basil and divide the sauce between 2 or more shallow ovenproof dishes (see Tips for freezing, below). Set aside. Make a sauce by beating the mascarpone with the milk until smooth, season, then set aside.\r\n\r\nPut the spinach in a large colander and pour over a kettle of boiling water to wilt it (you may need to do this in batches). When cool enough to handle squeeze out the excess water. Roughly chop the spinach and mix in a large bowl with 100g Parmesan and ricotta. Season well with salt, pepper and the nutmeg.\r\n\r\nHeat oven to 200C/180C fan/gas 6. Using a piping bag or plastic food bag with the corner snipped off, squeeze the filling into the cannelloni tubes. Lay the tubes, side by side, on top of the tomato sauce and spoon over the mascarpone sauce. Top with Parmesan and mozzarella. You can now freeze the cannelloni, uncooked, or you can cook it first and then freeze. Bake for 30-35 mins until golden and bubbling. Remove from oven and let stand for 5 mins before serving.",
    ingredients: [
      { name: "Olive Oil", quantity: "", unit: "3 tbsp", id: 1 },
      { name: "Garlic", quantity: "", unit: "8 cloves chopped", id: 2 },
      { name: "Caster Sugar", quantity: "", unit: "3 tbsp", id: 3 },
      { name: "Red Wine Vinegar", quantity: "", unit: "2 tblsp ", id: 4 },
      { name: "Chopped Tomatoes", quantity: "", unit: "3 400g Cans", id: 5 },
      { name: "Basil Leaves", quantity: "", unit: "Bunch", id: 6 },
      { name: "Mascarpone", quantity: "", unit: "2 tubs", id: 7 },
      { name: "Milk", quantity: "", unit: "3 tbsp", id: 8 },
      { name: "Parmesan", quantity: "", unit: "85g", id: 9 },
      { name: "Mozzarella", quantity: "", unit: "2 sliced", id: 10 },
      { name: "Spinach", quantity: "", unit: "1kg", id: 11 },
      { name: "Parmesan", quantity: "", unit: "100g ", id: 12 },
      { name: "Ricotta", quantity: "", unit: "3 tubs", id: 13 },
      { name: "Nutmeg", quantity: "", unit: "pinch", id: 14 },
      { name: "Cannellini Beans", quantity: "", unit: "400g", id: 15 },
    ],
    tags: ["Italian", "Vegetarian"],
    type: [],
    servings: 2,
    active: true,
    deleted: false,
    img: "https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg",
  },
];

export default RECIPES;