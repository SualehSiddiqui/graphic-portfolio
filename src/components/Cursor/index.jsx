import { useEffect, useRef } from "react";
import "./style.css";

const CursorTrail = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const colors = [
            "#c084fc",
            "#ec4899",
            "#22d3ee",
            "#ffffff",
        ];

        const particles = [];
        const particleCount = 14;

        // Create particles once
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");

            particle.className = "cursor-particle";

            particle.style.opacity = "0";

            container.appendChild(particle);

            particles.push({
                element: particle,
                x: 0,
                y: 0,
            });
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let lastX = mouseX;
        let lastY = mouseY;

        let particleIndex = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const dx = mouseX - lastX;
            const dy = mouseY - lastY;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            // Don't spawn particles for tiny movements
            if (distance < 25) return;

            lastX = mouseX;
            lastY = mouseY;

            const particle =
                particles[particleIndex];

            particleIndex =
                (particleIndex + 1) %
                particleCount;

            const size =
                Math.random() * 6 + 4;

            const color =
                colors[
                Math.floor(
                    Math.random() * colors.length
                )
                ];

            const rotation =
                Math.random() * 180 - 90;

            particle.element.style.width =
                `${size}px`;

            particle.element.style.height =
                `${size}px`;

            particle.element.style.background =
                color;

            particle.element.style.boxShadow = `
        0 0 8px ${color},
        0 0 18px ${color}
      `;

            particle.element.style.opacity = "1";

            particle.element.style.transform = `
        translate3d(
          ${mouseX}px,
          ${mouseY}px,
          0
        )
        rotate(${rotation}deg)
        scale(1)
      `;

            particle.element.animate(
                [
                    {
                        opacity: 1,
                        transform: `
              translate3d(
                ${mouseX}px,
                ${mouseY}px,
                0
              )
              scale(1)
            `,
                    },

                    {
                        opacity: 0,

                        transform: `
              translate3d(
                ${mouseX + (Math.random() * 35 - 17)}px,
                ${mouseY + (Math.random() * 35 - 17)}px,
                0
              )
              scale(0.2)
            `,
                    },
                ],
                {
                    duration: 750,
                    easing: "cubic-bezier(.22,1,.36,1)",
                    fill: "forwards",
                }
            );
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            particles.forEach((particle) => {
                particle.element.remove();
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="cursor-trail-container"
        />
    );
};

export default CursorTrail;