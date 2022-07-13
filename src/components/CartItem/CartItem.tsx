import { Button } from '@material-ui/core';
import { FC } from 'react';
import { CartItemType } from '../../utils/sharedUtils';
import { Wrapper, AmountStyled } from './CartItem.styles';

type CartItemProps = {
	item: CartItemType;
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const CartItem: FC<CartItemProps> = ({ item, addToCart, removeFromCart }) => {
	return (
		<Wrapper>
			<div>
				<h3>{item.title}</h3>
				<div className="information">
					<AmountStyled>Price: ${item.price}</AmountStyled>
					<AmountStyled>Total: ${(item.amount * item.price).toFixed(2)}</AmountStyled>
				</div>
				<div className="button">
					<Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
						{' '}
						-{' '}
					</Button>
					<p>{item.amount}</p>
					<Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
						{' '}
						+{' '}
					</Button>
				</div>
			</div>
			<img src={item.image} alt={item.title} />
		</Wrapper>
	);
};
