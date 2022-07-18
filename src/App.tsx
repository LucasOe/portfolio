import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "./App.scss";

function Cube() {
	const meshRef = useRef();

	useFrame(() => {
		meshRef.current.rotation.x += 0.01;
		meshRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry />
			<meshStandardMaterial />
		</mesh>
	);
}

export default function App() {
	return (
		<div className="App">
			<Canvas>
				<PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.1} />
				<directionalLight position={[0, 0, 5]} intensity={1} />
				<Cube />
			</Canvas>
		</div>
	);
}
