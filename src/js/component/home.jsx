import React from "react";

//include images into your bundle
import Crono from "./crono.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center text-align-center">
			<Crono />
		</div>
	);
};

export default Home;
