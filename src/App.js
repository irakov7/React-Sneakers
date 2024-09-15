import React from 'react';
import Card from "./components/Card";
import Header from './components/Header';
import ShoppingCart from "./components/ShoppingCart";


function App() {
	const [items, setItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);

		React.useEffect(() => {
			fetch('https://66e49359d2405277ed14bddc.mockapi.io/items')
			.then((res)=>{
				return res.json();
			})
			.then((json)=>{
				setItems(json);
			});
		},[ ]);
		

  return (
    <div className="wrapper">
		<header>
			{cartOpened && <ShoppingCart onClose ={() => setCartOpened(false)}/>}
			<Header onClickCard = {() => setCartOpened(true)}/>
		</header>
		<main>
		<div className="content">
			<div className="product-section">
				<h1>All Sneakers</h1>
				<div className="search-blok">
					<img src="/img/search.svg" alt='search'></img>
					<input placeholder="Search..."/>
				</div>
			</div>
		</div>

		<div className="card-container">
			{items.map((obj) =>(
				<Card 
					title={obj.title} 
					price={obj.price} 
					imageUrl={obj.imageUrl}
					onClickFavorite={()=> console.log('Hallo')}
					onClickPlus={()=> console.log('hallo')} />
			))}
			
			
		</div>	
		</main>	
	</div>
  );
}

export default App;
