import LoginHeader from './LoginHeader'
import Main from './Main'
import Coursection from './Coursection'
import Footer from './Footer'
export default function Home(){
    return(
        <div className='home'>
            <LoginHeader/>
            <Main />
            <Coursection/>
            <Footer />
        </div>
    )
}