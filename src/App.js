

function App() {
  return (
    <div className="wrapper">
		<header>
			<div className="headerWrapper">
				<div className="headerLeft">
					<img src="/img/logo.svg" alt="Logo"/>
					<div className="headerIcon">
						<h3>REACT SNEAKERS</h3>
						<p>The best sneakers store</p>
					</div>	
				</div>	
				<ul className="headerRight">
					<li>
						<img src="/img/Group.svg" alt="group"></img>
						<span>1256 $</span>
					</li>
					<li>
						<img src="/img/favorite.svg" alt="favorite"></img>
						<span>Favorite</span>
					</li>
					<li>
						<img src="/img/user.svg" alt="user"></img>
						<span>Profile</span>
					</li>
				</ul>
			</div>
		</header>
		<main>
		<div className="content">
			<h1>All Sneakers</h1>
		</div>

		<div className="snicers">
			<div className="card">
				<img src="/img/favicon.svg" alt="favicon"></img>
				<img width={133} height={112} src="/img/snicers/1.jpeg" alt="snicers"></img>
				<h5>Men's Nike Blazer Mid Suede Sneakers</h5>
				<div className="card_info">
					<div>
						<p>Price:</p>
						<b> 230 $</b>
					</div>
					<button>
						<img src="/img/plas.svg" alt="plas"></img>
					</button>
				</div>
			</div>
			<div className="card">
				<img src="/img/favicon.svg" alt="favicon"></img>
				<img width={133} height={112} src="/img/snicers/1.jpeg" alt="snicers"></img>
				<h5>Men's Nike Blazer Mid Suede Sneakers</h5>
				<div className="card_info">
					<div>
						<p>Price:</p>
						<b> 230 $</b>
					</div>
					<button>
						<img src="/img/plas.svg" alt="plas"></img>
					</button>
				</div>
			</div>
		</div>
		
		
			
		</main>	
	</div>
  );
}

export default App;
