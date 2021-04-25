
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import Credits from "./components/Credits";
import { Canvas } from "@react-three/fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";



export const App = () => {
    return (
    <>
        {/* <Credits/> */}
        <Canvas>
            <Cubes />
            <Lights />
            <Environment />
        </Canvas>
    </>
    );
}

export default App;

