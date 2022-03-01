import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const course of cart){
        total = total + course.price;
    }
    return (
        <div>
             <h3><b> Total Enroll</b>: {props.cart.length} </h3>
             <h5>Total Cost :${total} </h5>
        </div>
    );
};

export default Cart;