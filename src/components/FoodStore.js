import Food from './Food.js';

export default {
  async listFood() {
    return [
      new Food(
        "Twice-cook Pork",
        "China",
        [
          {
            name: "pork belly",
            quantity: 200,
            unit: "grams"
          },

          {
            name: "green onions"
            quantity: 6,
            unit: "ea"
          },

          {
            name: "cooking oil"
            quantity: 2,
            unit: "tablespoon"
          },

          {
            name: "chili bean paste",
            quantity: 2,
            unit: "tablespoon"
          },

          {
            name: "sweet bean paste",
            quantity: 2,
            unit: "teaspoon"
          },

          {
            name: "fermented black bean paste"
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "soy sauce"
            quantity: 1,
            unit: "teaspoon"
          },

          {
            name: "sugar",
            quantity: 2,
            unit: "teaspoon"
          },
        ],

        [
          "Bring a large pot of water to boil. Add the pork and simmer until it is just cooked through, about 25 minutes. Remove the pork from the water and let cool. Place the belly in the refrigerator for an hour or more to firm up the flesh. When the meat is cool, slice it thinly so you have 1/4-inch thick rectangles of meat.",
          "Heat oil or lard in wok over medium-high heat until simmering. Add the slices of pork and stir-fry until the fat has rendered somewhat and the skin is brown and somewhat crisp, about 2 minutes. Push the pork to one side of the wok and add the chili bean paste. Stir-fry until the oil is red, then add the sweet bean paste and the black beans and stir-fry for a few seconds longer. Mix everything together and add the soy sauce and the sugar.",
          "Add the leeks or ramps and stir-fry until they are just cooked, about 30 seconds. Serve immediately."
        ],

    ),

      new Food(
        "Three Cup Chicken (San Bei Ji)",
        "Taiwan",
        [
          {
            name: "sesame oil",
            quantity: 0.25,
            unit: "cup"
          },

          {
            name: "ginger",
            quantity: 1,
            unit: "inch"
          },

          {
            name: "garlic",
            quantity: 15,
            unit: "cloves"
          }

          {
            name: "thai red chilis",
            quantity: 2,
            unit: "ea"
          },

          {
            name: "bone-in chicken",
            quantity: 200,
            unit: "grams"
          },

          {
            name: "rice wine",
            quantity: 0.5,
            unit: "cup"
          },

          {
            name: "soy sauce",
            quantity: 0.25,
            unit: "cup"
          },

          {
            name: "sugar",
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "Thai basil leaves"
            quantity: 2
            unit: "cups"
          },
        ],

        [
          "Heat sesame oil in a large skillet or wok over medium-high heat until simmering. Add ginger, garlic, and chilis and cook until very fragrant, about 1 minute.",
          "Add chicken pieces to the skillet in a single layer and cook, tilting the pan if ncessary to submerge all pieces in the oil, for 1 minute. Flip chicken pieces and cook for 1 minute longer.",
          "Add rice wine, soy sauce, and sugar and bring to a boil, stirring to dissolve the sugar. Reduce heat to a simmer. Partially cover the skillet to prevent splashes of oil and cook, turning the chicken pieces every few minutes, until the chicken is cooked through, about 15 minutes. Stir in Thai basil and remove from heat."
        ]
      ),

      new Food(
        "Main Dish 3",
        "Thailand"

      ),
      new Food("Main Dish 4","Japan"),
      new Food("Main Dish 5","Japan"),

    ];
  }
}
