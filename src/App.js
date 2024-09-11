
import Card from "./components/Card";
import Header from './components/Header';
import ShoppingCart from "./components/ShoppingCart";


const arr = [
	{title: 'Mens Nike Blazer Mid Suede Sneakers', price: 230, imageUrl: '/img/snicers/1.jpeg' },
	{title: 'Mens sneakers Nike Air Max 270', price: 245, imageUrl: '/img/snicers/2.jpeg' },
	{title: 'Mens sneakers Nike Blazer Mid Suede', price: 445, imageUrl: '/img/snicers/3.jpeg' },
	{title: 'Sneakers Puma X Aka Boku Future Rider', price: 345, imageUrl: '/img/snicers/4.jpeg' },
	{title: 'Mens sneakers Under Armour Curry 8', price: 255, imageUrl: '/img/snicers/5.jpeg' },
	{title: 'Mens sneakers Nike Kyrie 7', price: 555, imageUrl: '/img/snicers/6.jpeg' },
	{title: 'Mens sneakers Jordan Air Jordan 11', price: 155, imageUrl: '/img/snicers/7.jpeg' },
	{title: 'Mens sneakers Nike LeBron XVIII', price: 333, imageUrl: '/img/snicers/8.jpeg' },
	{title: 'Mens sneakers Nike Lebron XVIII Low', price: 233, imageUrl: '/img/snicers/9.jpeg' },
	{title: 'Mens sneakers Nike Kyrie Flytrap IV', price: 573, imageUrl: '/img/snicers/10.jpeg' }
]

function App() {
  return (
    <div className="wrapper">
		<header>
			<ShoppingCart/>
			<Header/>
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
			{arr.map((obj) =>(
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
