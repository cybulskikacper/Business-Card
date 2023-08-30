import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	return (
		<div className="card">
			<img src="./images/Rectangle 90.jpg" alt="Picture of young woman smilling" className="picture"></img>

			<h3 className="name">Laura Smith</h3>
			<h5 className="profession">Frontend developer</h5>
			<h6 className="website">laurasmith.website</h6>

			<button className="email"><img src="./images/Mail.png" alt="Mail icon"/>Email</button>
			<button className="linkedin">Linkedin</button>
		</div>
	)
}

export default App
