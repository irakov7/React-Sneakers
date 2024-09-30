import React from 'react';

import Card from "../components/Card";

function Home({items, searchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
return(
	<main>
		<div className="content">
			<div className="product-section">
				<h1>{searchValue ? `Search by request: "${searchValue}"` : 'All Sneakers' }</h1>
				<div className="search-blok">
					<img src="/img/search.svg" alt='search'></img>
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
				</div>
			</div>
		</div>

		<div className="card-container">
			{items
			.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
			.map((item) =>(
				<Card 
					key={item.id}
					title={item.title} 
					price={item.price} 
					imageUrl={item.imageUrl}
					onAddToFavorites={(obj) => onAddToFavorites (obj)}
					onClickPlus={(obj) => onAddToCart(obj)}
				/>
			))}
	    </div>	
	</main>
);
}
export default Home;