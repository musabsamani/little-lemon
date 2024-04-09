import Landing from '../components/home/Landing'
import Testimonials from '../components/home/Testimonials'
import Specials from '../components/home/Specials'
import About from '../components/home/About'
import './home.module.scss'

function Home() {
    return (<>
        <Landing />
        <Specials />
        <Testimonials />
        <About />
    </>
    )
}

export default Home
