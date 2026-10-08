import Button from "./Button";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  totalPrice,
}) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.title}</h3>

                <p>
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <div className="quantity">
                {/* <button onClick={() => onDecrease(item.id)}>
                  −
                </button> */}
                <Button
                    label="-"
                    color="red"
                    onClick={() => onDecrease(item.id)}
                />

                <span>{item.quantity}</span>

                <Button
                    label="+"
                    color="green"
                    onClick={() => onIncrease(item.id)}
                />
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <h3 className="total">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;