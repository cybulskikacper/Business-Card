import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interesets'
import Footer from './components/Footer'
import './App.css'

function App() {
	return (
		<>
			<div className="card">
				<Info />
				<About />
				<Interests />
				<Footer />
			</div>
		</>
	)
}

export default App
