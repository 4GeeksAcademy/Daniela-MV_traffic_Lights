import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [colorRed, setColorRed]= useState("btn-danger opacity-50");

	const colorRojo = () => {
		if (colorRed === "btn-danger opacity-50"){
		setColorRed("btn-danger");
	} else{
		setColorRed("btn-danger opacity-50");
	}
};
	
	
	return (
		<div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
			<div className="bg-dark" style={{ width: "30px", height: "90px" }}></div>
			<div className="bg-dark" style={{ width: "150px", height: "450px" }}>
				<div className="d-flex flex-column" aria-label="Basic mixed styles example">
					<button 
					type="button" 
					className={`btn ${colorRed} mt-5 mx-4 rounded-circle`} 
					style={{height: "80px"}} 
					onClick={colorRojo}>
					</button>
					<button type="button" className="btn btn-warning mt-5 mx-4 rounded-circle opacity-50" style={{height: "80px"}}></button>
					<button type="button" className="btn btn-success mt-5 mx-4 rounded-circle opacity-50" style={{height: "80px"}}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;