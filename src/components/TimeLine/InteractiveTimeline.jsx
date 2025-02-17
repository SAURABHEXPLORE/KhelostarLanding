import { useState } from "react";


export default function InteractiveTimeline({ isReverse = false, data, isFlexCol = false }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const getButtonText = () => {
        switch (data.heading) {
            case "Get Your Khelostar ID in 1 Minute":
                return "Login Now";
            case "Khelostar Signup Process":
                return "Sign up";
            case "Khelostar Login Process":
                return "Login Now";
            default:
                return "Join Now";
        }
    };

    return (
        <section className='max-md:px-[20px] max-w-[1440px] mx-auto my-[4.375rem]'>
            <div className="flex flex-col justify-center items-center">
                <div className={`flex justify-center items-center gap-5 p-6 ${isReverse ? 'flex-row-reverse' : ''} ${isFlexCol ? 'flex-col' : ''} `}>
                    <div className='w-full'>
                        <img className='w-full' rel="preload" fetchpriority="high" as="image" type="image/svg" src={`${data.src}`} alt="vip_image" />
                    </div>

                    <div className='flex-none basis-1/2'>
                        <div>
                            <p className='font-bold text-2xl text-primary-text uppercase'>{data.heading}</p>
                        </div>
                        <div className="container py-6">
                            <div className="relative">

                                {data.timelineData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="relative flex items-center w-full"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="z-10 flex items-start order-1 md:order-2 gap-x-4 mt-1.5">
                                            <div className="flex items-center flex-col">
                                                <div className="w-[1.25rem] h-[1.25rem] rounded-full border-0 gradient_placeholder_col flex items-center justify-center">
                                                    <div
                                                        className={`w-[1.25rem] h-[1.25rem] rounded-full gradient_yellow_col transition-all duration-300 ease-in-out ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                                            }`}
                                                    >
                                                    </div>
                                                </div>
                                                {index !== data.timelineData.length - 1 && (
                                                    <div className="w-0.5 h-16 gradient_placeholder_col relative">
                                                        <div
                                                            className={`absolute top-0 left-0 w-full gradient_yellow_col transition-all duration-300 ease-in-out ${hoveredIndex === index ? "h-full" : "h-0"
                                                                }`}
                                                        ></div>
                                                    </div>
                                                )}
                                            </div>

                                            <div
                                                className={`cursor-pointer order-2 md:order-1 transition-all duration-300 ease-in-out ${index % 2 === 0 ? "md:text-left md:pr-8" : "md:pl-0"
                                                    } ${hoveredIndex === index ? "" : "bg-transparent"}`}>
                                                <h1 className={`text-primary-text transition-all duration-300 ease-in-out uppercase font-semibold  ${hoveredIndex === index ? "text_primary_gradient" : ""}`}>
                                                    {item.title}
                                                </h1>
                                                <p className="text-[#B4B4B4] font-normal text-[14px]">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-[24px] py-6">
                            <a href="#" onClick={(e) => e.preventDefault()} className="flex justify-center items-center btn_reflection relative overflow-hidden cursor-pointer gradient-border-gradient w-[15.438rem] h-[2.875rem] rounded-[3.125rem] font-bold text-[0.875rem] font-work-sans uppercase text-primary-text">
                                {getButtonText()}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

