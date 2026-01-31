import React, { useEffect, useRef } from 'react';

const BACKGROUND_COLOR = { r: 17, g: 24, b: 39 }; // rgb(17, 24, 39) - matching typical dark mode or just dark
// Actually, user asked for "white / very light cyan / very light blue" particles.
// The background itself should probably be transparent if it's an overlay?
// Wait, the user said "background particle system".
// Looking at the MainWeb.jsx, the root div has `bg-white`. The hero has an image.
// If I add this as a Fixed background, it might cover the whole page.
// The user asked for "background particle system".
// "Do not affect page scrolling or content clicks (background should be pointer-events none)."
// "Colors: white / very light cyan / very light blue, very low opacity (subtle, not distracting)."
// Since the main page is `bg-white` and has sections with white/gray backgrounds, white particles won't be visible.
// HOWEVER, the request mentions "bubbles + stars" and "premium modern landing page".
// Usually these are on dark backgrounds or the particles are dark on light backgrounds.
// Let's re-read: "Colors: white / very light cyan / very light blue".
// If the page is WHITE, these won't show up well unless they have shadows or the page isn't white.
// But the Hero section is dark (image + overlay).
// If I put it fixed over everything, it will be visible on the hero, but maybe not on the white sections.
// UNLESS the user implies a dark theme? But the code is `bg-white`.
// Maybe I should make the particles dark-ish if the background is light?
// OR maybe the user wants this specifically for the Hero?
// "Add an animated interactive background particle system (bubbles + stars) exactly like a premium modern landing page."
// "random distribution across full screen."
// "Colors: white / very light cyan / very light blue".
// This strongly suggests it's meant for a dark background.
// But the current `MainWeb` has `bg-white`.
// Maybe `src/pages/SplashLoading.jsx` was dark.
// But this is for the "MainWeb" presumably?
// Wait, "Add an animated interactive background particle system... to the main website."
// If I make them white/cyan, they will look great on the Hero section.
// On the white sections, they will be invisible.
// I will implement them as requested (white/cyan). If they are invisible on white sections, that's technically what was asked (color-wise).
// But to be "premium", maybe they should adapt or be visible.
// NOTE: "Colors: white / very light cyan ... very low opacity". This is definitely for dark backgrounds.
// I'll stick to the user's color request. It will look amazing on the Hero and Footer (dark).
// It might be subtle/invisible on the white body content. That is often desired (not distracting).
// PROCEEDING with white/cyan particles.

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let w, h;
        let particles = [];

        // Mouse state
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 60 : 120; // Fewer on mobile

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        class Particle {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow drift
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 12 + 2; // 2px - 14px
                this.type = Math.random() > 0.7 ? 'star' : 'bubble'; // 30% stars

                // Color configuration
                const colors = [
                    '255, 255, 255',   // White
                    '224, 255, 255',   // Light Cyan
                    '200, 240, 255'    // Light Blue
                ];
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.15 + 0.05; // 0.05 - 0.2 opacity
                this.glow = Math.random() > 0.9; // 10% have glow
            }

            draw(ctx) {
                ctx.save();
                ctx.beginPath();
                const color = `rgba(${this.colorBase}, ${this.alpha})`;
                ctx.fillStyle = color;
                ctx.strokeStyle = color;

                if (this.glow) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `rgba(${this.colorBase}, 0.5)`;
                }

                if (this.type === 'bubble') {
                    // Bubble: Circle outline or filled with very low opacity
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    if (this.glow) {
                        ctx.fill();
                    } else {
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        // Optional: slight fill
                        ctx.fillStyle = `rgba(${this.colorBase}, ${this.alpha * 0.3})`;
                        ctx.fill();
                    }
                } else {
                    // Star: 4-point
                    // Draw manually
                    ctx.translate(this.x, this.y);
                    // Slight rotation for stars? Maybe just static orientation or slow rotation
                    // Let's keep it simple: static 4-point star shape
                    // Draw a diamond shape with concave sides basically
                    ctx.beginPath();
                    const s = this.size;
                    ctx.moveTo(0, -s);
                    ctx.quadraticCurveTo(s * 0.1, -s * 0.1, s, 0);
                    ctx.quadraticCurveTo(s * 0.1, s * 0.1, 0, s);
                    ctx.quadraticCurveTo(-s * 0.1, s * 0.1, -s, 0);
                    ctx.quadraticCurveTo(-s * 0.1, -s * 0.1, 0, -s);
                    ctx.fill();
                }

                ctx.restore();
            }

            update(mouse) {
                // Base movement
                this.x += this.vx;
                this.y += this.vy;

                // Mouse Interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Attraction zone: 220px
                if (dist < 220) {
                    const force = (220 - dist) / 220; // 0 to 1 strength
                    const attractionSpeed = force * 2; // Strength factor

                    // Repulsion if TOO close (20px)
                    if (dist < 20) {
                        this.x -= dx * 0.1;
                        this.y -= dy * 0.1;
                    } else if (dist > 30) {
                        // Attraction with offset (orbit-like or just soft pull)
                        // Simple pull towards mouse
                        this.x += (dx / dist) * attractionSpeed;
                        this.y += (dy / dist) * attractionSpeed;
                    }
                }

                // Wrap around edges
                if (this.x < -20) this.x = w + 20;
                if (this.x > w + 20) this.x = -20;
                if (this.y < -20) this.y = h + 20;
                if (this.y > h + 20) this.y = -20;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Draw connections first (behind particles)
            // Optimization: only check nearby particles? O(N^2) for 100 particles is fine (10,000 checks)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                // Connect to mouse? Optional.

                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 80) {
                        const opacity = (1 - dist / 80) * 0.15; // Extremely subtle
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                p1.update(mouse);
                p1.draw(ctx);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave); // Fired when leaving the window

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};

export default InteractiveBackground;
