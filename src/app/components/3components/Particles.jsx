import React, { useEffect, useState } from "react";

const createParticle = () => ({
  id: Math.random(),
  top: `${Math.random()*100}%`,
  left: `${Math.random()*100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export default function Particles() {
    const [particles, setParticles] = useState([]);
  useEffect(() => {
    const addParticle = () => {
      const particle = createParticle();
      console.log(particle)
      particles.push(particle)
      const a = particles.slice(-50)
      setParticles(a);
      console.log(particles);
    };
    const interval = setInterval(addParticle, 200);
    return ()=>clearInterval(interval);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {particles.map((particle) => {
        return (
          <div
            key={particle.id}
            className="absolute w-[20px] h-[20px]"
            style={{

              background: `radial-gradient(gold 10%, rgba(120, 81, 169, 1) 60%)`,
                borderRadius:'50%',
                filter:`blur(1px)`,
              top: particle.top,
              left: particle.left,
              height:10,
              width:10,
              animation: `move ${particle.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
