import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Leaf } from 'lucide-react';

const ParticleBackground = () => {
    // Static positions for particles to match the screenshot "scattered" look
    // Using percentages for responsiveness while maintaining relative distribution
    const particles = [
        { top: '10%', left: '15%', size: 'w-1 h-1', opacity: 'opacity-20' },
        { top: '8%', left: '30%', size: 'w-1.5 h-1.5', opacity: 'opacity-10' },
        { top: '20%', left: '10%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '15%', left: '38%', size: 'w-1 h-1', opacity: 'opacity-10' },
        { top: '30%', left: '35%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '45%', left: '37%', size: 'w-1 h-1', opacity: 'opacity-10' },
        { top: '25%', left: '60%', size: 'w-1.5 h-1.5', opacity: 'opacity-10' },
        { top: '23%', left: '70%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '22%', left: '80%', size: 'w-1 h-1', opacity: 'opacity-20' },
        { top: '35%', left: '85%', size: 'w-1 h-1', opacity: 'opacity-10' },
        { top: '45%', left: '80%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '42%', left: '90%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '70%', left: '30%', size: 'w-1.5 h-1.5', opacity: 'opacity-10' },
        { top: '80%', left: '28%', size: 'w-1 h-1', opacity: 'opacity-5' },
        { top: '75%', left: '25%', size: 'w-1 h-1', opacity: 'opacity-10' },
        { top: '90%', left: '40%', size: 'w-1 h-1', opacity: 'opacity-10' },
        { top: '85%', left: '92%', size: 'w-1 h-1', opacity: 'opacity-10' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full bg-emerald-400 ${p.size} ${p.opacity} animate-pulse`}
                    style={{ top: p.top, left: p.left, animationDuration: `${3 + i * 0.2}s` }}
                ></div>
            ))}
        </div>
    );
};

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-64 md:w-80 h-1.5 bg-gray-700/50 rounded-full overflow-hidden mt-8 mb-2">
            <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

const SplashLoading = () => {
    const navigate = useNavigate();
    const { t } = useLanguage(); // Use existing context
    const [progress, setProgress] = useState(0);
    const [textOpacity, setTextOpacity] = useState(1);

    useEffect(() => {
        const duration = 2500; // 2.5 seconds total
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setTextOpacity(0); // Fade out effect slightly before nav
                        setTimeout(() => navigate('/home'), 500);
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="relative min-h-screen bg-[#111827] bg-gradient-to-br from-[#111827] to-[#1f2937] flex flex-col items-center justify-center font-sans">
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0f1522] z-10 pointer-events-none"></div>

            <ParticleBackground />

            {/* Main Content Container - centered z-20 for above background */}
            <div className={`relative z-20 flex flex-col items-center transition-opacity duration-500`} style={{ opacity: textOpacity }}>

                {/* Logo Block */}
                <div className="flex items-center gap-4 mb-2">
                    {/* Logo Circle */}
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Leaf className="text-white w-6 h-6 fill-current" />
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold text-white tracking-wide">
                            {t('splash.brand')}
                        </h1>
                        <span className="text-gray-400 text-[10px] tracking-wider uppercase -mt-1 block ml-0.5">
                            {t('splash.slogan')}
                        </span>
                    </div>
                </div>

                {/* Loading Status Text */}
                <div className="mt-12 text-gray-400 text-sm font-medium tracking-wide">
                    {t('splash.loading')}
                </div>

                {/* Progress Bar */}
                <ProgressBar progress={progress} />

                {/* Percentage Text */}
                <div className="text-gray-500 text-xs font-medium tracking-wider">
                    {Math.round(progress)}% Complete
                </div>
            </div>
        </div>
    );
};

export default SplashLoading;
