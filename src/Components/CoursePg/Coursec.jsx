
import Coursetiles from './Coursetiles';


export default function Coursec(props){
    
    return(
    <main className='user-mainpg-section  container position-relative ' id={props.light?'dark':'light'}>
        <Coursetiles/>
    </main>

    )
}