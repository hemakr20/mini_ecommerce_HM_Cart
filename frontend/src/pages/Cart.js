import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Cart({ cartItems, setCartItems }) {
  const [complete, setComplete] = useState(false);

  function increaseQty(item) {
    if (item.product.stock === item.qty) return;

    const updatedItems = cartItems.map((i) =>
      i.product._id === item.product._id
        ? { ...i, qty: i.qty + 1 }
        : i
    );
    setCartItems(updatedItems);
  }

  function decreaseQty(item) {
    if (item.qty > 1) {
      const updatedItems = cartItems.map((i) =>
        i.product._id === item.product._id
          ? { ...i, qty: i.qty - 1 }
          : i
      );
      setCartItems(updatedItems);
    }
  }

  function removeItem(item) {
    const updatedItems = cartItems.filter(
      (i) => i.product._id !== item.product._id
    );
    setCartItems(updatedItems);
  }

  function placeOrderHandler() {
    fetch(import.meta.env.VITE_API_URL + '/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItems),
    }).then(() => {
      setCartItems([]);
      setComplete(true);
      toast.success('Order Success!');
    });
  }

  return cartItems.length > 0 ? (
    <Fragment>
      <div className="container container-fluid">
        <h2 className="mt-5">
          Your Cart: <b>{cartItems.length} items</b>
        </h2>

        {cartItems.map((item) => (
          <Fragment key={item.product._id}>
            <hr />
            <div className="row align-items-center">
              <div className="col-3">
                <img
                  src={item.product.images[0].image}
                  alt={item.product.name}
                  height="80"
                />
              </div>

              <div className="col-3">
                <Link to={`/product/${item.product._id}`}>
                  {item.product.name}
                </Link>
              </div>

              <div className="col-2">
                <p>${item.product.price}</p>
              </div>

              <div className="col-2">
                <button onClick={() => decreaseQty(item)}>-</button>
                <span className="mx-2">{item.qty}</span>
                <button onClick={() => increaseQty(item)}>+</button>
              </div>

              <div className="col-2">
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </Fragment>
        ))}

        <hr />

        <button
          className="btn btn-primary"
          onClick={placeOrderHandler}
        >
          Place Order
        </button>
      </div>
    </Fragment>
  ) : !complete ? (
    <h2 className="mt-5">Your Cart is Empty!</h2>
  ) : (
    <Fragment>
      <h2 className="mt-5">Order Complete!</h2>
      <p>Your order has been placed successfully!</p>
    </Fragment>
  );
}