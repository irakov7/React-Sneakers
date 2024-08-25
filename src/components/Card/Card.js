function Card() {
	return(
		<div className="card">
				<div className="favicon">
					<img src="/img/favicon.svg" alt="favicon"></img>
				</div>
				<img width={133} height={112} src="/img/snicers/1.jpeg" alt="snicers"></img>
				<h3>Men's Nike Blazer Mid Suede Sneakers</h3>
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
	)
}
export default Card;