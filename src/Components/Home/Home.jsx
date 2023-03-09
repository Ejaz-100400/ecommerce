import LoginHeader from './LoginHeader'
import Main from './Main'
import Coursection from './Coursection'
export default function Home(){
    return(
        <div className='home'>
            <LoginHeader/>
            <Main />
            <Coursection/>
        </div>
    )
}