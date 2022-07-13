import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { ButtonStyled, Wrapper } from './App.styles';
import { Item } from './components';

export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: string;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
	return await (await fetch('https://fakestoreapi.com/products')).json();
};

const App = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as CartItemType[]);
	const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

	const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

	const handleAddToCart = (clickedItem: CartItemType) => null;

	const handleRemoveFromCart = () => null;

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong ...</div>;

	return (
		<Wrapper>
			<Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
				Cart goes here
			</Drawer>
			<ButtonStyled onClick={() => setIsCartOpen(true)}>
				<Badge badgeContent={getTotalItems(cartItems)} color="error">
					<AddShoppingCartIcon />
				</Badge>
			</ButtonStyled>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item item={item} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;
