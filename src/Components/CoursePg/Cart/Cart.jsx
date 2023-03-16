import Cartitems from "./Cartitems"
export default function Cart (props){
    return(
        <main className='user-mainpg-section  px-3 py-4 container' id={props.light?'dark':'light'}>
            <h3 className="text-uppercase">Cart items</h3>
            <Cartitems/>
        </main>
    )
}