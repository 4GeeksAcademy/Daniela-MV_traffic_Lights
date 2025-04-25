import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [colorRed, setColorRed] = useState("btn-danger opacity-25");
	const [colorYellow, setColorYellow] = useState("btn-warning opacity-25");
	const [colorGreen, setColorGreen] = useState("btn-success opacity-25");
	const [colorBlue, setColorBlue] = useState("btn-primary");
	const [boton,setBoton] = useState (false)

	const colorRojo = () => {
		if (colorRed === "btn-danger opacity-25") {
			setColorRed("btn-danger");
		} else {
			setColorRed("btn-danger opacity-25");
		}
	};

	const colorAmarillo = () => {
		if (colorYellow === "btn-warning opacity-25") {
			setColorYellow("btn-warning");
		} else {
			setColorYellow("btn-warning opacity-25");
		}
	};

	const colorVerde = () => {
		if (colorGreen === "btn-success opacity-25") {
			setColorGreen("btn-success");
		} else {
			setColorGreen("btn-success opacity-25");
		}
	};

	const colorAzul = () => {
		if (colorBlue === "btn-primary opacity-25") {
			setColorBlue("btn-primary");
		} else {
			setColorblue("btn-primary opacity-25");
		}
	};

	function coloresAl() {
		const aleatorizar = Math.floor(Math.random() * 3);

		if (aleatorizar === 0) {
			setColorRed("btn-danger");
			setColorYellow("btn-warning opacity-25");
			setColorGreen("btn-success opacity-25");
		} else if (aleatorizar === 1) {
			setColorRed("btn-danger opacity-25");
			setColorYellow("btn-warning");
			setColorGreen("btn-success opacity-25");
		} else {
			setColorRed("btn-danger opacity-25");
			setColorYellow("btn-warning opacity-25");
			setColorGreen("btn-success");
		}
	}

	function colorExtra() {
		if (boton === true) {
			return (
				<button
					type="button"
					className={`btn ${colorBlue} mt-5 mx-4 rounded-circle`}
					style={{ height: "80px" }}
					onClick={colorAzul}
				></button>
			);
		}
		return null;
	}
	


	return (
		<div className="d-flex justify-content-evenly">
			<div className="d-flex flex-column align-items-center justify-content-center mt-5">
				<div className="bg-dark" style={{ width: "30px", height: "90px" }}></div>
				<div className="bg-dark" style={{ width: "150px", height: "450px" }}>
					<div className="d-flex flex-column" aria-label="Basic mixed styles example">
						<button type="button" className={`btn ${colorRed} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorRojo}>
						</button>
						<button type="button" className={`btn ${colorYellow} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorAmarillo}>
						</button>
						<button type="button" className={`btn ${colorGreen} mt-5 mx-4 rounded-circle`} style={{ height: "80px" }} onClick={colorVerde}>
						</button>

					</div>
				</div>
			</div>
			<div className="d-flex align-items-center">
				<button type="button" className="btn btn-outline-info" onClick={coloresAl}>Cambia el color</button>
			</div>
			<div>
				<button type="button" className="btn btn-outline-purple ms-3" onClick={colorExtra}>
					Añadir luz azul
				</button>

			</div>
		</div>
	);
};

export default Home;