import React from "react";
import instagram from "../assets/instagram.png";
export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-sec-padding'>
				<div className='footer-links'>
					<div className='footer-links-div'>
						<h4>MY ACCOUNT</h4>
						<a href='/'>
							<p>My Account</p>
						</a>
						<a href='/'>
							<p>My Orders</p>
						</a>
						<a href='/'>
							<p>Transactions</p>
						</a>
					</div>
					<div className='footer-links-div'>
						<h4>SHOP</h4>
						<a href='/'>
							<p>Awards</p>
						</a>
						<a href='/'>
							<p>Medals</p>
						</a>
						<a href='/'>
							<p>Momento</p>
						</a>
						<a href='/'>
							<p>Wooden Plaques</p>
						</a>
					</div>
					<div className='footer-links-div'>
						<h4>ABOUT</h4>
						<a href='/'>
							<p>About us</p>
						</a>
						<a href='/'>
							<p>Policies</p>
						</a>
					</div>
					<div className='footer-links-div'>
						<h4>HELP</h4>
						<a href='/'>
							<p>Help Center</p>
						</a>
						<a href='/'>
							<p>FAQs</p>
						</a>
					</div>
					<div className='footer-links-div'>
						<h4>CONTACT US</h4>
						<a href='/'>
							<p>+91 123456789</p>
						</a>
						<a href='/'>
							<p>trophieshub@gmail.com</p>
						</a>
						<img src={instagram} alt='' />
						<a href='/'>
							<p>@TrophyHub</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
