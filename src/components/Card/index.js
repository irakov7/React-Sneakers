import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
const  [isAdded, setIsAdded] = React.useState(false)

const handleClick = () => {
	setIsAdded(!isAdded);  
  };


	return(
		<div className={styles.card}>
				<div className={styles.favicon} onClick={handleClick}>
					<img src={isAdded ? '/img/favicon-activ.svg' : '/img/favicon.svg'} alt="favicon"></img>
				</div>
				<img width={133} height={112} src={props.imageUrl} alt="snicers"></img>
				<h3>{props.title}</h3>
				<div className={styles.card_info}>
					<div>
						<p>price:</p>
						<b> {props.price} $</b>
					</div>
					<button onClick={handleClick}>
						<img src={isAdded ? '/img/plus-activ.svg' : '/img/plas.svg'} alt="plas"></img>
					</button>
				</div>
			</div>
	)
}
export default Card;
