import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthSidebar } from "../components/AuthSidebar";

export const Login = () => {
	const navigate = useNavigate();
	async function handleLogin(e) {
		e.preventDefault();
		const res = await fetch("http://localhost:3000/api/v1/user/signin", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await res.json();
		console.log(result);
		localStorage.setItem("token", result.token);
		const token = localStorage.getItem("token");
		console.log(`generated token - ${token}`);
		navigate("/home");
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<div className='wrapper'>
				<AuthSidebar />
				<div className='form'>
					<span className='form__logo'>Trophy Hub</span>
					<span className='form__title'>Log in</span>
					<form onSubmit={handleLogin} action=''>
						{/* Textfields */}
						<input
							onChange={e => setEmail(e.target.value)}
							className='form__field'
							type='email'
							placeholder='email'
						/>
						<input
							onChange={e => setPassword(e.target.value)}
							className='form__field'
							type='password'
							placeholder='password'
						/>
						{/* Log-in Button */}
						<button>Log in</button>
					</form>
					<p className='form__switch'>
						Already have an Account?{" "}
						<Link className='switch__link' to='/sign-up'>
							Signup
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
