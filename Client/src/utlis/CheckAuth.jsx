import React from "react";
import { Signup } from "../pages/signup";
import { Homepage } from "../pages/homepage";
import { useState, useEffect } from "react";

export const CheckAuth = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		console.log(`token - ${token}`);
		if (token) setIsSignedIn(true);

		return () => {
			console.log("clean up");
		};
	}, []);

	return isSignedIn ? <Homepage /> : <Signup />;
};
