import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [colorRed, setColorRed] = useState("btn-danger opacity-50");
	// const [colorYellow, setColorYellow] = useState("btn-warning opacity-50");
	// const [colorGreen, setColorGreen] = useState("btn-success opacity-50")

	const colorRojo = () => {
		if (colorRed === "btn-danger opacity-50") {
			setColorRed("btn-danger");
		} else {
			setColorRed("btn-danger opacity-50");
		}
	};

	// const colorAmarillo = () => {
	// 	if (colorYellow === "btn-warning opacity-50") {
	// 		setColorYellow("btn-warning");
	// 	} else {
	// 		setColorYellow("btn-warning opacity-50");
	// 	}
	// };

	// const colorVerde = () => {
	// 	if (colorGreen === "btn-success opacity-50") {
	// 		setColorGreen("btn-success");
	// 	} else {
	// 		setColorGreen("btn-success opacity-50");
	// 	}
	// };


	return (
		<div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
			<div className="bg-dark" style={{ width: "30px", height: "90px" }}></div>
			<div className="bg-dark" style={{ width: "150px", height: "450px" }}>
				<div className="d-flex flex-column" aria-label="Basic mixed styles example">
					<button type="button" className={`btn ${colorRed} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorRojo}>
					</button>
					{/* <button type="button" className={`btn ${colorYellow} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorAmarillo}>
					</button>
					<button type="button" className={`btn ${colorGreen} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorVerde}>
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Home;