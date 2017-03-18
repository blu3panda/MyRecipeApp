import Food from './Food.js';

export default {
  async listFood() {
    return [
      new Food(
        "twice-cook pork",
        "",
        "china",
        [
          {
            name: "pork belly",
            quantity: 200,
            unit: "grams"
          },

          {
            name: "green onions",
            quantity: 6,
            unit: "ea"
          },

          {
            name: "cooking oil",
            quantity: 2,
            unit: "tablespoons"
          },

          {
            name: "chili bean paste",
            quantity: 2,
            unit: "tablespoons"
          },

          {
            name: "sweet bean paste",
            quantity: 2,
            unit: "teaspoons"
          },

          {
            name: "fermented black bean paste",
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "soy sauce",
            quantity: 1,
            unit: "teaspoon"
          },

          {
            name: "sugar",
            quantity: 2,
            unit: "teaspoons"
          },
        ],

        [
          "1. Bring a large pot of water to boil. Add the pork and simmer until it is just cooked through, about 25 minutes. Remove the pork from the water and let cool. Place the belly in the refrigerator for an hour or more to firm up the flesh. When the meat is cool, slice it thinly so you have 1/4-inch thick rectangles of meat.",
          "2. Heat oil or lard in wok over medium-high heat until simmering. Add the slices of pork and stir-fry until the fat has rendered somewhat and the skin is brown and somewhat crisp, about 2 minutes. Push the pork to one side of the wok and add the chili bean paste. Stir-fry until the oil is red, then add the sweet bean paste and the black beans and stir-fry for a few seconds longer. Mix everything together and add the soy sauce and the sugar.",
          "3. Add the leeks or ramps and stir-fry until they are just cooked, about 30 seconds. Serve immediately."
        ],

        [
          "1. Boil pork belly until cooked through and slice it thinly.",
          "2. Stir fry pork slices in oil then add chili bean paste, sweet bean paste and black beans.",
          "3. Mix all other ingredients and stir fry until done."
        ],

    ),

      new Food(
        "three cup chicken",
        "san bei ji",
        "taiwan",
        [
          {
            name: "sesame oil",
            quantity: 0.25,
            unit: "cups"
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
          },

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
            unit: "cups"
          },

          {
            name: "soy sauce",
            quantity: 0.25,
            unit: "cups"
          },

          {
            name: "sugar",
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "Thai basil leaves",
            quantity: 2,
            unit: "cups"
          },
        ],

        [
          "1. Heat sesame oil in a large skillet or wok over medium-high heat until simmering. Add ginger, garlic, and chilis and cook until very fragrant, about 1 minute.",
          "2. Add chicken pieces to the skillet in a single layer and cook, tilting the pan if ncessary to submerge all pieces in the oil, for 1 minute. Flip chicken pieces and cook for 1 minute longer.",
          "3. Add rice wine, soy sauce, and sugar and bring to a boil, stirring to dissolve the sugar. Reduce heat to a simmer. Partially cover the skillet to prevent splashes of oil and cook, turning the chicken pieces every few minutes, until the chicken is cooked through, about 15 minutes. Stir in Thai basil and remove from heat."
        ],

        [
          "1. "
        ]
      ),

      new Food(
        "Braised Pork Rice (Lu Rou Fan)",
        "Taiwan",
        [
          {
            name: "pork belly",
            quantity: 400,
            unit: "grams"
          },

          {
            name: "rock sugar",
            quantity: 2.5,
            unit: "teaspoon"
          },

          {
            name: "shallot",
            quantity: 5,
            unit: "ea"
          },

          {
            name: "shiitake mushrooms",
            quantity: 8,
            unit: "ea"
          },

          {
            name: "shaoxing wine",
            quantity: 0.25,
            unit: "cup"
          },

          {
            name: "light soy sauce",
            quantity: 3,
            unit: "tablespoon"
          },

          {
            name: "dark soy sauce",
            quantity: 2,
            unit: "tablespoon"
          },

          {
            name: "water",
            quantity: 2,
            unit: "cups"
          },

          {
            name: "hardboiled eggs",
            quantity: 4,
            unit: "ea"
          },

          {
            name: "star anise",
            quantity: 3,
            unit: "ea"
          },

          {
            name: "cinnamon stick",
            quantity: 1,
            unit: "ea"
          },

          {
            name: "cloves",
            quantity: 6,
            unit: "ea"
          },

          {
            name: "bay leaves",
            quantity: 3,
            unit: "ea",
          },

          {
            name: "Sichuan peppercorns",
            quantity: 2,
            unit: "teaspoon"
          },

          {
            name: "dried tangerine peel",
            quantity: 2,
            unit: "pieces"
          },

          {
            name: "fresh ginger",
            quantity: 2,
            unit: "slices"
          },
        ],

        [
          "1. Bring a medium pot of water to a boil, and blanch the chopped pork belly for 2 minutes, Drain and set aside.",
          "2. Heat the oil in a wok over low heat, and add the sugar. Cook the sugar until it starts to melt and then add the onions. Turn up the heat to medium high and stir-fry the onions for a minute. Add the mushrooms and stir-fry for another couple minutes.",
          "3. Add the blanched pork, shaoxing wine, light soy sauce, dark soy sauce and water. Stir and bring the mixture to a boil. Once boiling, add the spices, along with the peeled hardboiled eggs and turn the heat to the lowest setting. Simmer for 1.5 hours, stirring occasionally to prevent sticking.",
          "4. At this point the meat should be fall-apart tender. To finish the dish, remove the spice packet and turn up the heat to medium high to thicken the sauce, stirring occasionally. This process should take about 5-minutes. The sauce should be thick enough to coat a spoon, but there should still be plenty of it left. Serve over steamed white rice."
        ]

      ),
      new Food(
        "Soondubu Jjigae",
        "Korea",
        [
          {
            name: "soft tofu",
            quantity: 1,
            unit: "packet"
          },

          {
            name: "sesame oil",
            quantity: 2,
            unit: "teaspoon"
          },

          {
            name: "sliced pork belly",
            quantity: 3,
            unit: "ounces"
          },

          {
            name: "kimchi",
            quantity: 0.5,
            unit: "cup"
          },

          {
            name: "onion",
            quantity: 0.25,
            unit: "ea"
          },

          {
            name: "garlic",
            quantity: 1,
            unit: "teaspoon"
          },

          {
            name: "gochugaru",
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "kimchi juice",
            quantity: 3,
            unit: "tablespoon"
          },

          {
            name: "anchovy broth",
            quantity: 1,
            unit: "cup"
          },

          {
            name: "fish sauce",
            quantity: 1,
            unit: "tablespoon"
          },

          {
            name: "enoki mushrooms",
            quantity: 1,
            unit: "packet"
          },

          {
            name: "egg",
            quantity: 1,
            unit: "ea"
          },

          {
            name: "scallion",
            quantity: 2,
            unit: "ea"
          }
        ],

        [
          "1. Make the broth by boiling all the ingredients for it in a small pot over medium high heat for 10 minutes. Strain the broth. You should end up with about 1 cup of broth. Do not season at this point.",
          "2. In a medium sized pot, add the sesame oil and saute the pork, onion, kimchi, garlic, and red pepper flakes, stirring occasionally, until the kimchi and onions are softened, and the meat is cooked, about 3 minutes. Pour in the kimchi juice and broth. Bring to a boil and cook for a  couple minutes. Add the fish sauce and season with salt and pepper as needed.",
          "3. Slice through the package of tofu with your knife. Gently add the tofu and break it up with your spoon, making sure not to make the chunks too small. Since the tofu is delicate, there's a possibility of it breaking up too much and disappearing if the pieces are too small. Bring to a boil again and cook for 5 minutes, stirring the bottom of the pot gently with a spoon occasionally, to make sure the tofu doesn't burn. Taste one more time and adjust the seasoning if needed. Add the enoki mushrooms, scallions, and egg on top. Turn off the heat and serve with bowls of rice."
        ]
      ),

      new Food(
        "Spaghetti All'arrabbiata",
        "Italy",
        [
          {
            name: "olive oil",
            quantity: 0.25,
            unit: "cups"
          },

          {
            name: "garlic",
            quantity: 2,
            unit: "cloves"
          },

          {
            name: "chili",
            quantity: 2,
            unit: "ea"
          },

          {
            name: "red pepper flakes",
            quantity: 0.5,
            unit: "teaspoon"
          },

          {
            name: "red wine",
            quantity: 0.5,
            unit: "cup"
          },

          {
            name: "canned tomatoes",
            quantity: 0.5,
            unit: "can"
          },

          {
            name: "dried oregano",
            quantity: 1,
            unit: "teaspoon"
          },

          {
            name: "parmesan",
            quantity: 30,
            unit: "grams"
          },
        ],

        [
            "1. Pour the olive oil into large skillet set over medium-high heat. Add the garlic and cook for 1 minute, or until fragrant. Add the onion, habanero, and red pepper flakes and cook until the onion begins to brown, about 5 minutes.",
            "2. Deglaze the pan with the wine. Scrape the bottom to loosen any bits. Then dump in the can of tomatoes. Add the oregano, and season with salt and pepper. Break up the tomatoes with a wooden spoon. Bring to a boil and then reduce to a simmer and cook for 20 minutes.",
            "3. Meanwhile, bring a large pot of water to a boil. With ten minutes or so left for the sauce to cook, add the spaghetti and cook for 1 minute less than the directions on the package.",
            "Drain the pasta, reserving 1/4 cup of the liquid. Toss the pasta with the sauce. Add the water if sauce is too dry. Toss until well combined. Add a sprinkling of the cheese and season with salt and pepper."
        ]
      ),

    ];
  }
}
