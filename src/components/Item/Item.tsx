import { Container, Wrapper } from './Item.styles';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../../App';
import { FC } from 'react';

type ItemProps = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
};

export const Item: FC<ItemProps> = ({ item, handleAddToCart }) => {
	return (
		<Wrapper>
			<img src={item.image} alt={item.title} />
			<Container>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3>${item.price}</h3>
			</Container>
			<Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
		</Wrapper>
	);
};
