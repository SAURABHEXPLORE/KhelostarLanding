import React from 'react';
import { useBounusOfferData } from './BonusOfferData';

const Card = ({ title, description, image }) => (

    <div className="w-full shadow-sm bg-[#151515]">
        <div className="flex flex-col justify-start gap-[6px] p-4 rounded-2xl">
            <img src={image} alt={title} className="w-6 h-6 object-cover" />
            <h1 className="text-[18px] font-semibold tracking-tight text-primary-text pt-[6px]">{title}</h1>
            <p className="font-normal text-[#B4B4B4] text-base">{description}</p>
        </div>
    </div>
);

export default function BonusOfferMain() {
    const { mainTitle, subTitle, bounusOfferDataBinding } = useBounusOfferData(); // Get dynamic game data

    if (!bounusOfferDataBinding || bounusOfferDataBinding.length === 0) {
        return <div>Loading...</div>;  // Placeholder when data is still loading
    }

    return (
        <section>
            <section className="max-md:px-[20px] max-w-[1440px] mx-auto my-[2.875rem]">
                <div className="flex justify-center">
                    <span className="text_primary_gradient text-[40px] font-bold uppercase">{subTitle || 'Default Sub Title'}</span>
                    <span className="text-primary-text text-[40px] font-bold uppercase pl-3">{mainTitle || 'Default Main Title'}</span>
                </div>
                <div className="mt-6">
                    <div className="flex flex-wrap justify-center w-full gap-y-[24px] gap-x-[20px]">
                        {bounusOfferDataBinding.map((game, index) => (
                            <div className='w-[19.063rem]' key={game.id || index}>
                                <Card
                                    image={game.image}
                                    title={game.title}
                                    description={game.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
