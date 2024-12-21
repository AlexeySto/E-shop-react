import "./styles/style.css";

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice }) => {


    return (
        <div className="cart">
            <div className="cart_box">
                <div className="cart_box__left">
                    <div className="card_box">
                        {Object.values(cartItems).map(item => (
                            <div key={item.id} className="card">
                                <img className="card__img" src={item.image} alt="card_1" />
                                <div className="card__info">
                                    <span className="card__title">{item.brand} {item.name}</span>
                                    <div className="card__specifications">
                                        <p className="card__text">Price: <span className="card__text card__text_select">${item.price}</span></p>
                                        <p className="card__text">Color: {item.color}</p>
                                        <p className="card__text">Size: {item.size}</p>
                                        <p className="card__text card__text_quantity">Quantity: <input className="card__input" type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            min="1" /></p>
                                    </div>
                                </div>
                                <div className="card__close" onClick={() => removeFromCart(item.id)}><svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector_1" d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z" fill="#575757" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart_buttons">
                        <button className="cart_buttons__button" onClick={() => clearCart()}>CLEAR SHOPPING CART</button>
                        <a className="cart_buttons__button" href="catalog">CONTINUE SHOPPING</a>
                    </div>
                </div>
                <div className="cart_box__right">
                    <form className="form">
                        <label className="form__title">Shipping Address</label>
                        <input className="form__input" type="text" placeholder="Bangladesh" />
                        <input className="form__input" type="text" placeholder="State" />
                        <input className="form__input" type="text" placeholder="Postcode / Zip" />
                        <button className="form__button">GET A QUOTE</button>
                    </form>
                    <div className="total">
                        <div className="sub">
                            <div className="sub__text">SUB TOTAL</div>
                            <div className="sub__text">${getTotalPrice()}</div>
                        </div>
                        <div className="grand">
                            <div className="grand__text">GRAND TOTAL</div>
                            <div className="grand__text">${getTotalPrice()}</div>
                        </div>
                        <svg className="total__line" width="275.000000" height="1.000000" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Shape_8" d="M0 0L275 0L275 1L0 1L0 0Z" fill="#E2E2E2" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                        <a className="total__button" href="#">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
