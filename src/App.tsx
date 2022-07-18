import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.scss";

export default function App() {
	return (
		<div className="App">
			<Canvas>
				<PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]} />
				<ambientLight />
				<mesh>
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
		</div>
	);
}
