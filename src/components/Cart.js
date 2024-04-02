import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decCart, AddCart } from '../redux/CartSystem'

const Cart = () => {
    const { carts } = useSelector(item => item.users)
    const dispatch = useDispatch();
    return (
        <>
            <div className='container-fluid m-3'>
                <div className='row'>
                    <div className='col-md-8 m-1'>
                        {
                            carts.map((ele) => {
                                const { id, image, title, badge_text, price, vendor } = ele;
                                return (
                                    <div className='row border shadow-sm p-2 mt-2 bg-light' key={id}>
                                        <div className='col-md-2'>
                                            <img src={image} alt={title} height={100} />
                                        </div>
                                        <div className='col-md-5'>
                                            <p className='p-0 m-0'><strong>{title}</strong></p>
                                            <p className='p-0 m-0'>Brand Name : {vendor}</p>
                                            <p className='p-0 m-0'>Season Offer : {badge_text === null ? "No offer" : badge_text}</p>
                                        </div>
                                        <div className='col-md-2 text-center'>
                                            <p >quantity</p>
                                            <i className='btn btn-outline-dark fa fa-minus p-1 m-0' onClick={() => dispatch(decCart(ele))}></i>
                                            <span className='p-0 m-0 ms-3'>{ele.quantity}</span>
                                            <i className='btn btn-outline-dark p-1 m-0 fa fa-plus ms-3' onClick={() => dispatch(AddCart(ele))}></i>
                                        </div>
                                        <div className='col-md-1 text-center'>
                                            <p>Price</p>
                                            <p className='p-0 m-0'>$ {price}</p>
                                        </div>
                                        <div className='col-md-1 text-center'>
                                            <p>Total</p>
                                            <p className='p-0 m-0'>$ {price * ele.quantity}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='col-md-3'>
                        <div className='row m-3 p-3 bg-light w-100'>
                            <div className='col-md-12'>
                                <h5 className='text-center text-warning'>Order Summary</h5>
                                <hr />
                            </div>
                            <div className='col-md-12'>
                                <p>Total Items : {carts.length}</p>
                                <p>Total Price : $ {'0000'}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart