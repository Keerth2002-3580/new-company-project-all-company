import React from 'react';

const StepsRow = () => {
    const steps = [
        { num: 1, title: "Registration", desc: "Create your account and complete the verification process" },
        { num: 2, title: "Investment", desc: "Choose your investment amount (minimum LKR 50,000)" },
        { num: 3, title: "Plantation Allocation", desc: "Your investment is allocated to specific aloe vera plantation plots" },
        { num: 4, title: "Monthly Returns", desc: "Receive guaranteed monthly returns directly to your account" },
        { num: 5, title: "Principal Return", desc: "Get your full principal amount back after 3 years" },
    ];

    return (
        <div className="relative py-12">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 w-full h-0.5 bg-gray-200 hidden md:block -z-10 transform translate-y-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#00c853] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md border-4 border-white relative z-10">
                            {step.num}
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h4>
                        <p className="text-[10px] text-gray-500 max-w-[140px] leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsRow;
