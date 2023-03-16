import React from "react"
import { Context } from "../../../Context"
export default function Cartitems(){
    const {cart,removetocart}=React.useContext(Context)
    return(
        <div>
            <span>{cart.length} added to the cart</span>
            {
             cart.map(cartitem=>{
                return(
                    <>
                    <hr />
                    <div className="py-3 d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center gap-3 w-50">
                            <img src={cartitem.img} width='100' alt={cartitem.course_name} />
                            <h4>{cartitem.course_name}</h4>
                        </div>
                        <div className="d-flex align-items-center gap-3 w-25 justify-content-between">
                            <span className="remove-cart"  onClick={()=>removetocart(cartitem._id)}>Remove</span>
                            <div className="d-flex align-items-center gap-1">
                            <h3>{cartitem.cost}</h3><i class="fa-solid fa-tag"></i>
                            </div>
                        </div>
                    </div>
                    <hr />
                    </>
                )
             })
            }
        </div>
    )
}