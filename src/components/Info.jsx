import React from 'react'

function Info() {
	return (
		<>
			<img src="./images/Rectangle 90.jpg" alt="Picture of young woman smilling" className="picture"></img>

			<h3 className="name">Laura Smith</h3>
			<h5 className="profession">Frontend developer</h5>
			<h6 className="website">laurasmith.website</h6>

			<div className="buttons">
				<button className="email" aria-hidden="true">
					<p className="text1">Email</p>
				</button>
				<button className="linkedin" aria-hidden="true">
					<p className="text2">LinkedIn</p>
				</button>
			</div>
		</>
	)
}

export default Info
