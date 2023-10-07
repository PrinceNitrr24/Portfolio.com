export default {
  background: {
    // color: {
    //   value: "#000000",
    // },
    // image: "url(./images/prince.png)",
    repeat: "no-repeat",
    position: "right bottom",
    size: "33%",
  },

  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#f5deb3", "#ff5733", "#3498db", "#2ecc71"],
    },
    links: {
      color: ["#f5deb3", "#ff5733", "#3498db", "#2ecc71"],
      distance: 150,
      enable: true,
      opacity: 0.7,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 300,
      },
      value: 80,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "star",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
