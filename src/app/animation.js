'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Animation() {
    
    const steps = 100;
    const radius = 100;

    const angles = [...Array(steps).keys()].map(i => (2 * Math.PI * i) / steps);
    const x_circ = angles.map(a => radius * Math.cos(a));
    const y_circ = angles.map(a => radius * Math.sin(a));
  return (
    <motion.img
      src={'./images/orange_ship.png'}
      className="absolute top-6 left-36 w-20 z-40 rotate-y-180"
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 500, x_circ],
        y: [0, 200, y_circ]
      }}
      

    />
  );
}
