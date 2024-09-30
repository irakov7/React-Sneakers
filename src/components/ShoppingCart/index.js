function ShoppingCart({onClose, onRemove, items =[]}){
	return(
	<div  className="overlay">
		<div className="ShoppingCart">
				<div className="cartTop">
					<h2>Shopping Basket</h2>
					<img onClick={onClose} className="btnCloses" src="/img/btn-remuv.svg" alt="closes"></img>
				</div>

				{items.length > 0 ?(
					<div>
						<div className="items">
							{items.map((obj, index) => (
							<div className="cartItem" key={obj.id ? obj.id : index}>
								<img width={70} height={70} src={obj.imageUrl} alt="snicers"></img>
								<div className="cartTitle">
									<p>{obj.title}</p>
									<b> {obj.price} $</b>
								</div>
								<img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remuv.svg" alt="remove"></img>
							</div>
							))}
						</div>
						<div>
							<ul className="cartTotalBloc">
								<li>
									<span>Total</span>
									<div></div>
									<b>350 $</b>
								</li>
								<li>
									<span>Tax 5% :</span>
									<div></div>
									<b>150 $</b>
								</li>
							</ul>
							<button className="greenBtn">Оформить заказ</button>
						</div>
					</div>
				) : (
					<div className="cartEmpty">
						<img src="/img/box.svg" alt="box"></img>
						<h2>The basket is empty</h2>
						<p>Add at least one pair of sneakers to place an order.</p>
						<button onClick={onClose} className="btnBox">go back</button>
					</div>
				)}
		</div>
	</div>
	)
}
export default ShoppingCart;