import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
            <div className="bg-dark" style={{width: "20px", height: "80px"}}></div>
			<div className="bg-dark" style={{width: "150px", height: "300px"}}></div>
		</div>
	);
};

export default Home;