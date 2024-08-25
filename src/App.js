
import Card from "./components/Card/Card";
import Header from './components/Header/Header';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

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
			<Card/>
		</div>	
		</main>	
	</div>
  );
}

export default App;
