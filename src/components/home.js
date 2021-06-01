import { Navigation } from './navigation'
import { Header } from './header'
import { Features } from './features'
import { About } from './about'
import { Testimonials } from './testimonials'
import { Contact } from './contact'

export const Home = (props) => {
  return (
    <div>
     <Navigation />
     <Header />
      <Features/>
      <About />
      {/* <Services data={landingPageData.Services} />  */}
      {/* <Gallery /> */}
      <Testimonials  />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact />
    </div>
  )
}

