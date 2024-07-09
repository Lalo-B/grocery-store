import { useState, useEffect } from 'react';
import { addOne, minusOne, removeFromCart } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';


function CartItem({ item }) {
  // const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();
  // console.log(item)

  const count = useSelector(state=>state.cart[item.id].count);

  // useEffect(() => {
  //   setCount(item.count);
  // }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={()=>{dispatch(addOne(item.id))}}
          >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=>{dispatch(minusOne(item.id))}}
        >
          -
        </button>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
