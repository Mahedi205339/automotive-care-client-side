import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    }

    const particlesLoaded = (container) => {
        console.log(container);
    }

    const optionsStar = {
        "fpsLimit": 120,
        "interactivity": {
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push",
                },
                "onHover": {
                    "enable": true,
                    "mode": "repulse",
                },
                "resize": true,
            },
            "modes": {
                "push": {
                    "quantity": 4,
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4,
                },
            },
        },
        "particles": {
            "color": {
                "value": "#ffffff",
            },
            "links": {
                "color": "#ffffff",
                "distance": 100,
                "enable": true,
                "opacity": 0.5,
                "width": 1,
            },
            "move": {
                "direction": "none",
                "enable": true,
                "outModes": {
                    "default": "bounce",
                },
                "random": false,
                "speed": 1,
                "straight": false,
            },
            "number": {
                "density": {
                    "enable": true,
                    "area": 1000,
                },
                "value": 80,
            },
            "opacity": {
                "value": 0.5,
            },
            "shape": {
                "type": "circle",
            },
            "size": {
                "value": { min: 1, max: 3 },
            },
        },
        "detectRetina": true,
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionsStar}
        ></Particles>
    );
};

export default Particle;