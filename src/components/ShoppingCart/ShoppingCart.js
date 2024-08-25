function ShoppingCart(){
	return(
	<div style={{display: 'none'}}  className="overlay">
		<div className="ShoppingCart">
				<div className="cartTop">
					<h2>Shopping Basket</h2>
					<img className="btnCloses" src="/img/btn-remuv.svg" alt="closes"></img>
				</div>
			
			<div className="items">
				<div className="cartItem">
					<img width={70} height={70} src="/img/snicers/1.jpeg" alt="snicers"></img>
					<div className="cartTitle">
						<p>Men's Nike Air Max 270 Sneakers</p>
						<b> 230 $</b>
					</div>
					<img className="removeBtn" src="/img/btn-remuv.svg" alt="remove"></img>
				</div>

				<div className="cartItem">
					<img width={70} height={70} src="/img/snicers/1.jpeg" alt="snicers"></img>
					<div className="cartTitle">
						<p>Men's Nike Air Max 270 Sneakers</p>
						<b> 230 $</b>
					</div>
					<img className="removeBtn" src="/img/btn-remuv.svg" alt="remove"></img>
				</div>

			</div>

			<div>
				<ul className="cartTotalBloc">
					<li>
						<span>Итого</span>
						<div></div>
						<b>350 $</b>
					</li>
						<li>
							<span>Налог 5% :</span>
							<div></div>
							<b>150 $</b>
						</li>
					</ul>
					<button className="greenBtn">Оформить заказ</button>
			</div>
		</div>
	</div>
	)
}
export default ShoppingCart;