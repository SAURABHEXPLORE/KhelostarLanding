import React from 'react';
import { useRecommendedGameData } from './RecommendedGamesData';

const Card = ({ title, description, playNow, image }) => (
    <div className="py-6 pl-6 pr-[60px] shadow-sm bg-[#151515] relative overflow-hidden">
        <div className='flex gap-x-[46px]'>
            <div>
                <img src={image} alt={title} className="w-full h-[200px] object-cover" />
            </div>
            <div className='flex flex-col items-baseline justify-center flex-1'>
                <h1 className="text-2xl font-bold tracking-tight text-primary-text text-center">{title}</h1>
                <p className="font-normal text-[#B4B4B4] text-base pt-[16px]">{description}</p>
                {/* <a href='#' className='uppercase text-[18px] underline font-bold text-yellow-500 py-[30px]'>{playNow}</a> */}
                <a
                    href="#" onClick={(e) => e.preventDefault()}
                    className='uppercase text-[18px] font-bold decoration-0 inline-block bg-primary-playNowbtn pt-[30px] pb-0.5 relative group playNowCommonStyle'
                >
                    {playNow}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#edd77f] transition-all group-hover:w-full"></span>
                </a>

            </div>
        </div>
    </div>
);

export default function RecommendedGamesMain() {
    const { mainTitle, subTitle, recommendedGames } = useRecommendedGameData();  // saurabh :- Get the dynamic game data

    if (!recommendedGames || recommendedGames.length === 0) {
        return <div>Loading...</div>;  //  saurabh :-  Placeholder when data is still loading
    }

    return (
        <section>l
            <section className="max-md:px-[20px] max-w-[1440px] mx-auto my-[2.875rem]">
                <div className="flex justify-center">
                    <span className="text-primary-text text-[40px] font-bold uppercase">{mainTitle}</span>
                    <span className="text_primary_gradient text-[40px] font-bold uppercase pl-3">{subTitle}</span>
                </div>
                <div className="mt-6">
                    <div className="grid gap-y-[40px] gap-x-[44px]">
                        {recommendedGames.map((game) => (
                            <div key={game.id}>
                                <Card
                                    image={game.image}
                                    title={game.title}
                                    description={game.description}
                                    playNow={game.playText}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
