import CustomerReviews from "./Home/CustomerReviews"

import Hero from "./Home/Hero"
import PopularProducts from "./Home/PopularProducts"


const Home = () => {
  return (
    <div>
        <Hero />
        <PopularProducts/>
        <CustomerReviews/>
        
    </div>
  )
}

export default Home
