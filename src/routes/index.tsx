import { createFileRoute } from '@tanstack/react-router'
import Navbar from '#/components/navbar'
import Hero from '#/components/hero'
import Details from '#/components/details'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="space-y-1">
      <Navbar/>
      <Hero/>
      <Details/>
    </div>
  )
}
