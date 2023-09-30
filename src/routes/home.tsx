import { DisplayBox } from '@/components/display-box'
import { Hero } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {


    
  return (
    <Layout>
      <Hero
        title="plan my weekend"
        content="tell me where you'll be, and i'll plan you an epic itinerary!"
      />
    </Layout>
  )
}
