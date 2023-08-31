import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	return (
		<>
			<div className="card">
				<img src="./images/Rectangle 90.jpg" alt="Picture of young woman smilling" className="picture"></img>

				<h3 className="name">Laura Smith</h3>
				<h5 className="profession">Frontend developer</h5>
				<h6 className="website">laurasmith.website</h6>

				<div className="buttons">
					<button className="email" aria-hidden="true">
						Email
					</button>
					<button className="linkedin" aria-hidden="true">
						Linkedin
					</button>
				</div>

				<section className="first">
					<h2 className="about">About</h2>
					<p className="me">
						I am a frontend developer with a particular interest in making things simple and automating daily tasks. I
						try to keep up with security and best practices, and am always looking for new things to learn.
					</p>
				</section>

				<section className="second">
					<h2 className="interests">Interests</h2>
					<p className="info">
						Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
						ninja. Coffee fanatic.
					</p>
				</section>

				<footer className="footer">
					<div className="footer-icons">
						<a href="#" className="twitter">
							<img src="./images/Twitter Icon.png" alt="Twitter icon" />
						</a>

						<a href="#" className="facebook">
							<img src="images/Facebook Icon.png" alt="Facebook Icon" />
						</a>

						<a href="#" className="instagram">
							<img src="./images/Instagram Icon.png" alt="Instagram Icon" />
						</a>
						<a href="#" className="github">
							<img src="./images/GitHub Icon.png" alt="Github Icon" />
						</a>
					</div>
				</footer>
			</div>
		</>
	)
}

export default App
