import Image from "next/image"

const recipeData = {
  id: 3,
  name: "Eggs Benedict",
  instructions: "Bring water to a boil. Add a splash of vinegar and swirl the water. With the swirl going, crack the egg into the water. Remove once cooked.",
  cookingTime: 20,
  prepTime: 2,
  servings: 1,
  ingredients: {
    "water": "2 cups",
    "vinegar": "a splash",
    "egg": 1
  },
}

const displayIngredients = Object.keys(recipeData.ingredients).map(item => 
  <li key={item}>{item}</li>
)

export default function Meal() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-600">{recipeData.name}</h1>
      <section className="grid grid-cols-2 grid-rows-1 gap-x-4 items-center">
        <Image className="row-start-1" src="https://placehold.co/600x400" alt="placeholder" width={600} height={400}/>
          <ul className="row-start-1">
            <li><span className="font-medium text-gray-600">Prep:</span> {recipeData.prepTime}mins</li>
            <li><span className="font-medium text-gray-600">Cook time:</span> {recipeData.cookingTime}mins</li>
            <li><span className="font-medium text-gray-600">Servings:</span> {recipeData.servings}</li>
            <h5><span className="font-medium text-gray-600">Ingredients:</span></h5>
            <ul className="list-disc px-8">
              {displayIngredients}
            </ul>
          </ul>
      </section>
      <section>
        <h5 className="text-lg font-medium text-gray-600">Instructions:</h5>
        <p>{recipeData.instructions}</p>
      </section>
    </div>
  )
}