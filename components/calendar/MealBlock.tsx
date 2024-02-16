import { mealData } from "./CalendarWeek"

export default function MealBlock(props: 
  {timeOfDay: string}  
) {
  return (
    <div>
      <h1>{props.timeOfDay}</h1>
    </div>
  )
}