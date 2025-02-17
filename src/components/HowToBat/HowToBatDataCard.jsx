import React from 'react';
import { useHowToBatData } from './HowToBatData';

const HowToBatDataCard = () => {
    const { mainTitle, subTitle, howToBatData } = useHowToBatData();

    const Card = ({ stepNumber, title, description }) => (
        <div className="p-5 shadow-sm bg-[#151515] relative overflow-hidden">
            <div className="gradient_text_col absolute w-[126px] h-[96px] rounded-[50px] text-center top-0 left-0 transform -translate-x-[66px] -translate-y-[40px]">
                <p className="absolute text-primary-black bottom-0 right-0 py-[15px] px-[26px] font-semibold text-2xl">{stepNumber}</p>
            </div>
            <div>
                <h1 className="mb-2 text-[20px] font-bold tracking-tight text-primary-text text-center">{title}</h1>
                <p className="font-normal text-[#B4B4B4] text-base pt-[18px]">{description}</p>
            </div>
        </div>
    );

    return (
        <section className="max-md:px-[20px] max-w-[1440px] mx-auto my-[2.875rem]">
            <div className="flex justify-center">
                <span className="text-primary-text text-[40px] font-bold uppercase">{mainTitle}</span>
                <span className="text_primary_gradient text-[40px] font-bold uppercase pl-3">{subTitle}</span>
            </div>

            <div className="mt-6">
                <div className="grid grid-cols-3 gap-y-[40px] gap-x-[44px]">
                    {howToBatData.map((step) => (
                        <div key={step.id} className='transform hover:scale-105 transition-transform duration-500 cursor-pointer'>
                            <Card
                                key={step.id}
                                stepNumber={step.stepNumber}
                                title={step.title}
                                description={step.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex pt-[40px] w-full justify-center">
                <a href="#" onClick={(e) => e.preventDefault()} className="flex justify-center items-center btn_reflection relative overflow-hidden cursor-pointer gradient-border-gradient w-[320px] h-[2.875rem] rounded-[3.125rem] font-bold text-[0.875rem] font-work-sans uppercase text-primary-text">
                    START BETTING NOW
                </a>
            </div>
        </section>

    );
};

export default HowToBatDataCard;
