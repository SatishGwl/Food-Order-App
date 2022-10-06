import CartContect from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = item => {
    };
    const removeItemFromCartHandler = id => {
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    },
    return(
    <CartContext.CartProvider value={cartContext}>
        {props.children}
    </CartContext.CartProvider>)
}

export default CartProvider;