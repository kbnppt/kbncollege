import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<div>
			<body>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.footercol}>
							<h4>Sitesoch</h4>
							{/* <div style={{display:'flex'}} className=''>
								<div style={{border:'1px solid red',width:'8px',height:'8px',backgroundColor:'red'}}></div>
								<a href='#' style={{color:'white'}}>Home</a>
							</div> */}
							<ul className={styles.listStyle}>
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Pricing</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>Get Help</h4>
							<ul>
								<li><a href="#">Shipping</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">Order Status</a></li>
								<li><a href="#">Payment Options</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>Address</h4>
							<ul>
								<li><a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>follow us</h4>
							<div className={styles.sociallinks}>
								<a href="#"><i className="fab fa-google"></i></a>
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</body>
	</div>
	)
}

export default Footer
