// plain JS

import React, { useRef, useState } from 'react';
// import { Group } from '@react-three/fiber';

export const Plain = () => {
    // const group = new Group();
    // const geo = new BoxBufferGeometry(2,2,2);
    // const mat = new MeshStandardMaterial({color: 0x1fbeca});
    // const mesh = new Mesh(geo, mat);
    // group.position.set(0,0.1,0.1);
    // group.add(mesh);
    // scene.add(group);

    // declarative

    return (
        <group position={[0,0.1,0.1]}>
            <mesh>
                <boxBufferGeometry attach="geometry" args={[0.047, 0.5, 0.29]} />
                <meshStandardMaterial attach="material" color={0xf95b3c} />
            </mesh>
        </group>
    )
}

export default Plain;