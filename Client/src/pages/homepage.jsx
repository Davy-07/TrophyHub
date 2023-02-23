import React from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
	const navigate = useNavigate();
	async function handleLogout() {
		localStorage.removeItem("token");
		const token = localStorage.getItem("token");
		console.log(`token - ${token} Logged out`);
		navigate("/");
	}
	return (
		<div className='home'>
			<div>
				<h1>Home</h1>
				<button onClick={handleLogout}>Logout</button>
			</div>
			<Footer />
		</div>
	);
};
