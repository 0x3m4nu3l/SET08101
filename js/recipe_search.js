// API credentials
const APP_ID = '06fbe3bc';
const APP_KEY = 'a73ff53b5d6fa3902d39ca2ca4764a22';

// DOM elements
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const suggestBtn = document.querySelector('#suggest-btn');
const resultsSection = document.querySelector('#results');
const loadMoreBtn = document.querySelector('#load-more-btn');

// API variables
let searchQuery = '';
let from = 0;
let to = 9;
let recipes = [];

// Event listeners
searchForm.addEventListener('submit', handleSearch);
searchBtn.addEventListener('click', handleSearch);
suggestBtn.addEventListener('click', suggestRecipe);
loadMoreBtn.addEventListener('click', loadMore);

function handleSearch(event) {
  event.preventDefault();
  console.log('Search button clicked');
  searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    from = 0;
    to = 9;
    resultsSection.innerHTML = '';
    fetchRecipes(searchQuery, from, to);
  }
}



// Fetch recipes
async function fetchRecipes(query, from, to, clearResults) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (clearResults) {
      recipes = data.hits;
      resultsSection.innerHTML = '';
    } else {
      recipes = [...recipes, ...data.hits];
    }
    displayRecipes(recipes);
  } catch (error) {
    console.log(error);
  }
}

// Display recipes
function displayRecipes(recipes) {
  if (recipes.length > 0) {
    resultsSection.innerHTML = '';
    recipes.forEach((recipe) => {
      const recipeCard = `
        <div class="recipe">
          <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
          <h2>${recipe.recipe.label}</h2>
          <p><strong>Calories:</strong> ${Math.round(recipe.recipe.calories)}</p>
          <a href="${recipe.recipe.url}" target="_blank">Get recipe</a>
        </div>
      `;
      resultsSection.insertAdjacentHTML('beforeend', recipeCard);
    });
    if (recipes.length >= 10) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } else {
    resultsSection.innerHTML = '<p>No recipes found.</p>';
    loadMoreBtn.style.display = 'none';
  }
}

// Load more recipes
function loadMore() {
  from += 10;
  to += 10;
  fetchRecipes(searchQuery, from, to, false);
}

// Suggest recipe
async function suggestRecipe() {
  const randomQuery = getRandomQuery();
  const url = `https://api.edamam.com/search?q=${randomQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const suggestedRecipes = data.hits;
    let recipeCards = '';
    suggestedRecipes.forEach((recipe) => {
      const suggestedRecipe = recipe.recipe;
      const recipeCard = `
        <div class="recipe">
          <img src="${suggestedRecipe.image}" alt="${suggestedRecipe.label}">
          <h2>${suggestedRecipe.label}</h2>
          <p><strong>Calories:</strong> ${Math.round(suggestedRecipe.calories)}</p>
          <a href="${suggestedRecipe.url}" target="_blank">Get recipe</a>
        </div>
      `;
      recipeCards += recipeCard;
    });
    resultsSection.innerHTML = recipeCards;
    loadMoreBtn.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

// Get random query
function getRandomQuery() {
  const queries = ['italian chicken', 'italian beef', 'italian pork', 'italian fish', 'italian shrimp', 'italian tofu', 'italian lentils', 'italian beans', 'italian rice', 'italian pasta', 'italian potatoes',  'italian carrots', 'italian broccoli', 'italian cauliflower', 'italian spinach', 'italian kale', 'italian lettuce', 'italian cucumber', 'italian tomatoes', 'italian bell peppers', 'italian onions', 'italian garlic', 'italian ginger', 'italian lemon', 'italian lime', 'italian orange', 'italian grapefruit', 'italian apples', 'italian bananas', 'italian berries', 'italian avocado', 'italian olives', 'italian coconut', 'italian almonds', 'italian cashews', 'italian peanuts', 'italian walnuts', 'italian pistachios', 'italian hazelnuts', 'italian sunflower seeds', 'italian pumpkin seeds', 'italian chia seeds', 'italian italian flaxseeds', 'italian italian sesame seeds', 'italian italian poppy seeds', 'italian italian honey', 'italian italian maple syrup', 'italian agave nectar', 'italian coconut sugar', 'italian italian brown sugar', 'italian italian white sugar', 'italian italian molasses', 'italian italian balsamic vinegar', 'italian italian red wine vinegar', 'italian apple cider vinegar', 'italian soy sauce', 'italian tamari', 'italian hoisin sauce', 'italian fish sauce', 'italian mayonnaise', 'italian mustard', 'italian ketchup', 'italian hot sauce', 'italian salsa', 'italian hummus', 'italian yogurt', 'italian sour cream', 'italian cream cheese', 'italian cheddar cheese', 'italian parmesan cheese', 'italian feta cheese', 'italian mozzarella cheese', 'italian goat cheese', 'italian blue cheese', 'italian eggs', 'italian milk', 'italian butter', 'italian flour', 'italian yeast', 'italian baking powder', 'italian baking soda', 'italian cocoa powder', 'italian chocolate chips', 'italian vanilla extract', 'italian cinnamon', 'italian nutmeg', 'italian cloves', 'italian cardamom', 'italian rosemary', 'Italian thyme', 'Italian basil', 'Italian oregano', 'Italian paprika', 'Italian cumin', 'Italian coriander', 'Italian turmeric'];
  const randomNumber = Math.floor(Math.random() * queries.length);
  return queries[randomNumber];
}