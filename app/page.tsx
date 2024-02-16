import CalendarDay from '@/components/calendar/CalendarDay'
import MealBlock from '@/components/calendar/Meal'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>My Delicious Week</h1>
      <MealBlock />
      <CalendarDay />
    </main>
  )
}
