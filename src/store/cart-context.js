import React from 'react'

const CartContect = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItem: (id) => {}
});

export default CartContect;