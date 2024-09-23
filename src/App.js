import React from 'react';
import axios from 'axios';
import Card from "./components/Card";
import Header from './components/Header';
import ShoppingCart from "./components/ShoppingCart";


function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searcValue, setSearcValue] = React.useState('');
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

	const onChangeSearcInput = (event) =>{
		setSearcValue(event.target.value);
	};
		

  return (
    <div className="wrapper">
		<header>
			{cartOpened && <ShoppingCart items ={cartItems} onClose ={() => setCartOpened(false)} onRemove={onRemoveItem} />}
			<Header onClickCard = {() => setCartOpened(true)}/>
		</header>
		<main>
			<div className="content">
				<div className="product-section">
					<h1>{searcValue ? `Search by request: "${searcValue}"` : 'All Sneakers' }</h1>
					<div className="search-blok">
						<img src="/img/search.svg" alt='search'></img>
						<input onChange={onChangeSearcInput} value={searcValue} placeholder="Search..."/>
					</div>
				</div>
			</div>

			<div className="card-container">
				{items
				.filter((item) => item.title.toLowerCase().includes(searcValue.toLowerCase()))
				.map((item, index) =>(
					<Card 
						key={item.id || index}
						title={item.title} 
						price={item.price} 
						imageUrl={item.imageUrl}
						onClickFavorite={()=> console.log('Hallo')}
						onClickPlus={(obj) => onAddToCart(obj)} 
					/>
				))}
			</div>	
		</main>	
	</div>
  );
}

export default App;
