import { mealData } from "./CalendarWeek"
import MealBlock from "./MealBlock"

export default function CalendarDay() {
  return (
    <div>
      <MealBlock timeOfDay="Breakfast"/>
      <MealBlock timeOfDay="Lunch"/>
      <MealBlock timeOfDay="Dinner"/>
    </div>
  )
}