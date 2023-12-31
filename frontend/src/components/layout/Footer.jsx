const Footer = () => {
	return (
		<>
			<footer>
				<div className="company-guarantees">
					<div className="guarantees-section">
						<img className="guarantee-img" src="/shipping-icon.png"></img>
						<h3>Free Shipping</h3>
						<p>Free shipping for all products</p>
					</div>
					<div className="guarantees-section">
						<img className="guarantee-img" src="/verified-icon.png"></img>
						<h3>Authentic</h3>
						<p>All watches are authenticated and certified</p>
					</div>
					<div className="guarantees-section">
						<img className="guarantee-img" src="/tracking-icon.png"></img>
						<h3>Tracking</h3>
						<p>Access to 24/7 tracking</p>
					</div>
				</div>

				<div className="footer-links">
					<div className="footer-section">
						<div className="footer-title">Company</div>
						<ul>
							<li>
								<button>Our Company</button>
							</li>
							<li>
								<button>Our Story</button>
							</li>
							<li>
								<button>Philanthropy</button>
							</li>
							<li>
								<button>Site Map</button>
							</li>
							<li>
								<button>Career</button>
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<div className="footer-title">Brand</div>
						<ul>
							<li>
								<button>Reviews</button>
							</li>
							<li>
								<button>Blog</button>
							</li>
							<li>
								<button>Press</button>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<div className="footer-title">Support</div>
						<ul>
							<li>
								<button>FAQ</button>
							</li>
							<li>
								<button>Warranty</button>
							</li>
							<li>
								<button>Contact Us</button>
							</li>
							<li>
								<button>Customer Care</button>
							</li>
							<li>
								<button>Size Guide</button>
							</li>
							<li>
								<button>Track Your Order</button>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<div className="footer-title">Official Channels</div>
						<ul>
							<li>
								<button>Instagram</button>
							</li>
							<li>
								<button>Facebook</button>
							</li>
							<li>
								<button>Twitter</button>
							</li>
							<li>
								<button>Pinterest</button>
							</li>
							<li>
								<button>LinkedIn</button>
							</li>
							<li>
								<button>YouTube</button>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<div className="footer-title">Privacy And Terms</div>
						<ul>
							<li>
								<button>Return Policy</button>
							</li>
							<li>
								<button>Shopping</button>
							</li>
							<li>
								<button>Privacy</button>
							</li>
							<li>
								<button>Accessibility</button>
							</li>
							<li>
								<button>Terms Of Service</button>
							</li>
							<li>
								<button>Legal Notice</button>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
