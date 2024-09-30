import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import ShoppingCart from "./components/ShoppingCart";

import Home from "./pages/Home";


function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);

		React.useEffect(() => {
			axios.get('https://66e49359d2405277ed14bddc.mockapi.io/items').then((res) =>{
				setItems(res.data);		
			});
			axios.get('https://66e49359d2405277ed14bddc.mockapi.io/Cart').then((res) =>{
				setCartItems(res.data);		
			});
		},[ ]);

		const onAddToCart = (obj) =>{
			axios.post('https://66e49359d2405277ed14bddc.mockapi.io/Cart', obj);
			setCartItems(prev =>[...cartItems, obj]);
		};

		const onRemoveItem = (id) =>{
			axios.delete(`https://66e49359d2405277ed14bddc.mockapi.io/Cart/${id}`);
			setCartItems((prev) => prev.filter(item => item.id !== id));
		};

		const onAddToFavorites = (obj) =>{
			axios.post('https://66e49359d2405277ed14bddc.mockapi.io/favorites', obj);
			setFavorites(prev =>[...prev, obj]);
		};

	const onChangeSearchInput = (event) =>{
		setSearchValue(event.target.value);
	};
		

  return (
    <div className="wrapper">
		<header>
			{cartOpened && <ShoppingCart items ={cartItems} onClose ={() => setCartOpened(false)} onRemove={onRemoveItem} />}
			<Header onClickCard = {() => setCartOpened(true)}/>
		</header>
		
		<Routes>
			<Route path="/"
				element={
					<Home 
						items={items} 
						searchValue={searchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorites={onAddToFavorites}
						onAddToCart={onAddToCart}
					/>
				}
			/>
		</Routes>
	</div>
  );
}

export default App;
