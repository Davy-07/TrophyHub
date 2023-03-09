import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Verfication = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [otp, setOtp] = useState(0);

	async function handleVerfication() {
		console.log(`state id : ${location.state.stateId}`);

		const res = await fetch("http://localhost:3000/api/v1/user/verify", {
			method: "POST",
			body: JSON.stringify({
				state_id: location.state.stateId,
				_id: location.state._id,
				otp,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await res.json();
		console.log(result);
		navigate("/log-in");
	}
	return (
		<div className='verify'>
			<input type='text' onChange={e => setOtp(e.target.value)} />
			<button type='submit' onClick={handleVerfication}>
				Verify
			</button>
		</div>
	);
};
