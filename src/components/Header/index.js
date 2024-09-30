import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

function Header(props){
	
	return(
		<div className={styles.headerWrapper}>
			<Link to="/">
				<div className={styles.headerLeft}>
					<img src="/img/logo.svg" alt="Logo"/>
					<div className={styles.headerIcon}>
						<h3>REACT SNEAKERS</h3>
						<p>The best sneakers store</p>
					</div>	
				</div>			
			</Link>
				
				<ul className={styles.headerRight}>
					<li onClick={props.onClickCard}>
						<img src="/img/Group.svg" alt="group"></img>
						<span>1256 $</span>
					</li>
					<li>
						<Link to="/favorites">
							<img src="/img/favorite.svg" alt="favorite"></img>
							<span>Favorite</span>
						</Link>
					</li>
					<li>
						<img src="/img/user.svg" alt="user"></img>
						<span>Profile</span>
					</li>
				</ul>
			</div>
	)
}
export default Header;
