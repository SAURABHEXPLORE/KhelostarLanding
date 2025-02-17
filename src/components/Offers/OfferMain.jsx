import React from 'react';
import { useOfferData } from './OfferData';

const Card = ({ title, description, image }) => (
    <div className="shadow-sm bg-[#151515] border-1 border-[#3A3939]">
        <div className='flex'>
            <div className='flex items-center gap-[10px] border-1 border-r-[#3A3939] min-w-[20%] pl-4'>
                <img src={image} alt={title} className="w-6 h-6 object-cover" />
                <h1 className="text-[18px] font-semibold tracking-tight text-primary-text text-center">{title}</h1>
            </div>
            <div className='flex flex-1 py-[26px] px-[24px]'>
                <p className="font-normal text-[#B4B4B4] text-base pt-[16px]">{description}</p>
            </div>
        </div>
    </div>
);

export default function OffersMain() {
    const { mainTitle, subTitle, second_mainTitle, offerDataBinding } = useOfferData();  // saurabh :- Get the dynamic game data

    if (!offerDataBinding || offerDataBinding.length === 0) {
        return <div>Loading...</div>;  //  saurabh :-  Placeholder when data is still loading
    }

    return (
        <section>l
            <div className="max-md:px-[20px] max-w-[1440px] mb-[2.875rem] mx-auto">
                <div className="flex justify-center">
                    <span className="text-primary-text text-[40px] font-bold uppercase">{mainTitle}</span>
                    <span className="text_primary_gradient text-[40px] font-bold uppercase pl-3">{subTitle}</span>
                    <span className="text-primary-text text-[40px] font-bold uppercase pl-3">{second_mainTitle}</span>
                </div>
                <div className="mt-6 ">
                    <div className="grid gap-y-[40px] gap-x-[44px]">
                        {offerDataBinding.map((game) => (
                            <div key={game.id}>
                                <Card
                                    image={game.image}
                                    title={game.title}
                                    description={game.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
