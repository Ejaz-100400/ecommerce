import React from 'react';
import Modal from 'react-modal'
import { Context } from '../../../../Context';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
export default function Orderdetails(props){
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    let subtitle;
    const {cart} = React.useContext(Context)
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div>
            <button onClick={openModal} className='cart-btn px-2 py-2 w-25 mt-5 d-flex align-items-center justify-content-center'>
                <span>Checkout</span>
            </button> 
            <Modal className='modal-backdrop'
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='order-modal d-flex justify-content-between position-relative'>
          <div className='order-left container p-2 position-relative'>
          <h4>Order details</h4>
          <div className='order-cart-items'>
          {
              cart.map(cartitem=>{
                return(
                    <>
                    <hr />
                    <div className="py-3 d-flex align-items-center justify-content-between flex-wrap  position-relative">
                        <div className="d-flex align-items-center gap-3 w-50">
                            <img src={cartitem.img} width='100' alt={cartitem.course_name} />
                            <h5>{cartitem.course_name}</h5>
                        </div>
                        <div className="d-flex align-items-center gap-3 w-25 justify-content-between">
                            <div className="d-flex align-items-center gap-1">
                            <h3>₹{cartitem.cost}</h3><i class="fa-solid fa-tag"></i>
                            </div>
                        </div>
                    </div>
                    <hr />
                    </>
                )
             })
          }
          </div>
          <div className='payment-sec position-fixed w-100 p-2'>
            <h4>Payment Method</h4>
          </div>
          </div>
          <div className='order-right container p-2 w-50 position-relative'>
            <div className='order-summ position-fixed-top'>
              <h3>Summary</h3>
              <span>Total Price</span> 
              <span className='mx-5 mt-5 cost'>₹{props.totalCost}</span>
              <hr />
              <button className='explore-btn px-2 py-3 w-100 d-flex justify-content-center mt-3'>
                <span> Proceed</span></button>
            </div>
          </div>
          <button onClick={closeModal} className='explore-btn  px-2 py-2 position-absolute back-btn d-flex juistify-content-center'>
            <span>Go Back</span>
          </button>
        </div>
      </Modal> 
        </div>
    )
}