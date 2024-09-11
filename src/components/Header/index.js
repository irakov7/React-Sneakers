import styles from './Header.module.scss';


function Header(){
	return(
		<div className={styles.headerWrapper}>
				<div className={styles.headerLeft}>
					<img src="/img/logo.svg" alt="Logo"/>
					<div className={styles.headerIcon}>
						<h3>REACT SNEAKERS</h3>
						<p>The best sneakers store</p>
					</div>	
				</div>	
				<ul className={styles.headerRight}>
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
	)
}
export default Header;
