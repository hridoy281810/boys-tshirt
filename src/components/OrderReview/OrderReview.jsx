import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {
    const tshirtDta = useLoaderData()
    console.log(tshirtDta)
    return (
        <div>
            <h1>Order Review {tshirtDta.length}</h1>
        </div>
    );
};

export default OrderReview;