import { FC } from 'react';
import { CartItem } from '..';
import { CartItemType } from '../../App';
import { Wrapper } from './Cart.styles';

type CartProps = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const Cart: FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {
	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in your cart</p> : null}
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
			))}
		</Wrapper>
	);
};
