import { useState, useEffect } from 'react';
import BreadcrumbSmall from '../components/Breadcrumb/BreadcrumbSmall';
import '../styles/style_cart.css';
import Cart from '../components/Cart';

const CartPage = () => {
    useEffect(() => {
        document.title = 'Корзина';
    });

    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || {};
        setCartItems(items);
    }, []);

    const updateQuantity = (id, quantity) => {
        const updatedCart = { ...cartItems };
        updatedCart[id].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = { ...cartItems };
        delete updatedCart[id];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        localStorage.clear('cart');
        setCartItems({});
    };

    const getTotalPrice = () => {
        return Object.values(cartItems).reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };


    return (
        <div className="desktop_index">
            <BreadcrumbSmall title='SHOPPING CART' />
            <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                getTotalPrice={getTotalPrice} />
        </div>
    );
};

export default CartPage;