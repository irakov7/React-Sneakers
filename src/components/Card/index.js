import React from 'react';
import styles from './Card.module.scss';

function Card({imageUrl, title, price, onClickPlus, onAddToFavorites}) {
const  [isAdded, setIsAdded] = React.useState(false);
const  [isFavorite, setIsFavorite] = React.useState(false);

const handleClick = () => {
	onClickPlus({imageUrl, title, price});
	setIsAdded(!isAdded);  
  };

const onClickFavorite =() =>{
	onAddToFavorites({imageUrl, title, price});
	setIsFavorite(!isFavorite);
};


	return(
		<div className={styles.card}>
				<div className={styles.favicon} onClick={onClickFavorite}>
					<img src={isFavorite ? '/img/favicon-activ.svg' : '/img/favicon.svg'} alt="favicon"></img>
				</div>
				<img width={133} height={112} src={imageUrl} alt="snicers"></img>
				<h3>{title}</h3>
				<div className={styles.card_info}>
					<div>
						<span>price:</span>
						<b> {price} $</b>
					</div>
					<button onClick={handleClick}>
						<img src={isAdded ? '/img/plus-activ.svg' : '/img/plas.svg'} alt="plas"></img>
					</button>
				</div>
			</div>
	)
}
export default Card;
