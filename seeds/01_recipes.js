
exports.seed = function(knex) {
  return knex.raw('ALTER SEQUENCE recipes_id_seq RESTART with 6')
    .then(() => {
      return knex('recipes').del()
        .then(() => {
          return knex('recipes').insert([
          {
            id: 1, 
            title: 'Slow Cooker Pork Carnitas',
            number_of_ingredients: 13,
            instructions: `
            2 1/2 pounds pork shoulder (also known as 'pork butt')
            1 tablespoon lime juice
            2 teaspoons coarse sea salt
            2 teaspoons ground cumin
            1 teaspoon chili powder
            1 teaspoon garlic powder
            1 teaspoon oregano
            1 teaspoon onion powder
            1/2 teaspoon ground black pepper
            corn tortillas
            cilantro
            diced onions
            lime wedges
            avocados

            1. Cut the pork shoulder into large 4-inch chunks, removing any excess fat. 
            2. Place them in the slow cooker.  
            3. Add all the other ingredients to the slow cooker and mix thoroughly to coat the meat with all the herbs and spices. Cover and cook on high for 4 hours. 
            4. When tender, shred the meat by pulling it apart with a fork. Serve pork carnitas on warm corn tortillas and top with onions, cilantro, lime juice and any other toppings you desire.`,
            url: 'https://www.isabeleats.com/mexican-slow-cooker-pork-carnitas-tacos/'
          },
          {
            id: 2, 
            title: 'Best Pesto',
            number_of_ingredients: 7,
            instructions: `
            4 medium cloves garlic
            Generous pinch coarse sea salt
            3 ounces basil leaves (from about a 4-ounce bunch)
            2 tablespoons (30g) pine nuts
            2 1/2 tablespoons (1 ounce) grated Parmigiano Reggiano
            2 1/2 tablespoons (1 ounce) Pecorino Fiore Sardo (see note)
            1/2 cup plus 2 tablespoons (150ml) mildly flavored extra-virgin olive oil

            1. Using a mortar and pestle, combine garlic and sea salt and grind to a paste.
            2. Add basil leaves, a handful at a time, and grind against the walls of the mortar; it's easier to use a circular grinding motion than to try to pound the leaves with the pestle. Continue until all basil leaves have been crushed to fine bits and have released their green liquid.
            3. Add pine nuts and gently crush with pestle, then work into a paste with basil and garlic.
            4. Add both cheeses and continue to use pestle to grind into a paste.
            5. Slowly drizzle in olive oil, working it into the pesto with a wooden spoon until incorporated. Pesto can be served with pasta right away, or transferred to a jar or container, covered with a small layer of olive oil, sealed, and refrigerated overnight.`,
            url: 'https://www.seriouseats.com/recipes/2014/07/best-pesto-recipe.html'
          },
          {
            id: 3, 
            title: 'Scrambled Eggs',
            number_of_ingredients: 6,
            instructions: `
            6 cold eggs
            15g butter
            Salt and pepper
            Crème fraîche
            Chives

            1. Crack 6 cold eggs into a deep saucepan.
            2. Add the butter. For smaller batches, use a 2-to-1 eggs-to-butter ratio.
            3. Put the pan on high heat.
            4. Stir continuously with a rubber spatula—don't whisk—making sure to scrape the bottom of the pan.
            5. After 30 seconds, take the pan off the heat. Keep stirring. After about 10 seconds, put back on the heat. Repeat for 3 minutes.
            6. In the last minute, season the eggs lightly. For extra creamy texture, stir in 1 tsp of crème fraîche.
            7. Plate and garnish with chopped chives.`,
            url: 'https://www.gordonramsayrestaurants.com/recipes/scrambled-eggs/'
          },
          {
            id: 4, 
            title: 'Flourless Peanut Butter Chocolate Chip Cookies',
            number_of_ingredients: 5,
            instructions: `
            1 large egg
            1 cup almond butter
            1/2 cup light brown sugar, lightly packed
            1 tsp baking soda
            1 cup dark chocolate chips

            1. Set oven to 350F
            2. Crack the egg into a medium bowl and beat it lightly. Add in the almond butter, baking soda, and sugar and mix everything together well.
            3. Fold in the chocolate chips.
            4. Scoop the dough onto a parchment or silpat lined baking sheet. I use a (1 3/4 inch) scoop, but you can use a tablespoon. Space the cookies well apart, and flatten them slightly with the back of a spoon.
            5. Bake for 8 to 10 minutes. Don't overbake these, the cookies will look underdone, but they will firm up as they cool.
            6. Let them cool for a couple of minutes on the baking sheet, then transfer them carefully to a cooling rack.`,
            url: 'https://theviewfromgreatisland.com/minimal-mondayflourless-almond-butter-chocolate-chips/'
          },
          {
            id: 5,
            title: 'Thai Chicken with Basil & Cauliflower Fried Rice',
            number_of_ingredients: 11,
            instructions: `
            For the Cauliflower Fried Rice:
              1 tsp sesame oil
              2 Tbsp avocado (or other lightly flavored) oil
              2 tsp fresh garlic, minced
              1 Tbsp fresh ginger, minced
              4 cups finely chopped (riced) cauliflower
              2 Tbsp sugar free fish sauce
            For the Thai Chicken with Basil
              2 Tbsp avocado (or other lightly flavored) oil
              3 cloves fresh garlic, chopped
              1 tsp fresh ginger, minced
              2 Tbsp fresh chilis, minced
              2 cups chopped, raw, chicken breast
              2 Tbsp fish sauce
              1 tsp granulated sugar substitute (I used this brand)
              1/4 cup fresh basil leaves, roughly chopped
              Fried eggs to serve (optional)

            To make the Cauliflower Fried Rice:
              1. Heat the sesame and avocado (or other) oil in a large heavy bottomed (cast iron if you have it) saute pan. 
              2. Add the garlic and ginger and cook for about one minute or until fragrant.
              3. Add the cauliflower and fry over high heat for about 3 minutes.
              4. Add the fish sauce and stir well, cooking for another 3 minutes. The cauliflower should be softened and browned, with most of the liquid evaporated.
              5. Remove from the heat and transfer the cauliflower rice to a serving dish.

            To make the Thai Chicken with Basil:
              1. Heat the avocado (or other) oil in the same pan as you cooked the cauliflower rice.
              2. Add the garlic, ginger, and chilis and cook for 1-2 minutes, or until fragrant and sizzling.
              3. Add the chicken to the pan and stir occasionally – cook for about 5 minutes, or until golden brown and cooked through.
              4. Add the fish sauce, sweetener, and fresh basil – stir and cook until the chicken is coated and the basil is wilted – about 2-3 minutes.
              5. Remove from the heat and serve over the cauliflower rice. Fried egg is optional but recommended.`,
            url: 'https://www.ibreatheimhungry.com/thai-chicken-with-basil-cauliflower-fried-rice-low-carb/'
          }   
        ]);
      });
    })
};
