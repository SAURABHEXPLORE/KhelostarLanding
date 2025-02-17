import { useState } from 'react';
import './App.css';
import InteractiveTimeline from './components/TimeLine/InteractiveTimeline';
import { timelineData, timelineData2, timelineData3, section1Data, section2Data, section3Data } from './components/TimeLine/TimelineData';
import HowToBatDataCard from './components/HowToBat/HowToBatDataCard';
import RecommendedGamesMain from './components/RecommendedGames/RecommendedGamesMain';
import OffersMain from './components/Offers/OfferMain';
import BonusOfferMain from './components/BonusAndOffer/BonusOfferMain';
import DepositeWithdrawMain from "./components/DepositeAndWithdraw/DepositeWithdrawMain";
import { DepositeData, WithdrawalData, DepositeImgData, WithdrawalImgData } from './components/DepositeAndWithdraw/DepositeWithdrawData';





function App() {

  return (
    <>

      <header className='text-white w-[100%] bg-primary-black h-20 items-center'>
        <ul className='flex w-full justify-between px-20 h-full items-center'>
          <li><img rel="preload" fetchpriority="high" as="image" type="image/svg" className='w-[10.125rem] h-[3.125rem]' src="/assets/images/khelo_brand_logo.svg" alt="khelo_brand_logo" /></li>
          <li>
            <ul className='flex gap-8 font-work-sans'>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className='flex justify-center items-center btn_reflection relative overflow-hidden cursor-pointer gradient-border-gradient w-[10.688rem] h-[2.75rem] rounded-[3.125rem] font-bold text-[0.875rem] font-work-sans uppercase text-primary-text'>Sign Up</a>
              </li>
              <li>
                <div className='w-[10.688rem] h-[2.75rem] gradient-border-gradient font-bold text-[0.875rem] font-work-sans uppercase relative'>
                  <button className='w-[10.48rem] h-[2.6rem] gradient-border-gradient_in bg-primary-black absolute top-[1.6px] left-[1.5px] uppercase'>Log in</button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <section className='bg-[#2E2E2E] w-full flex items-center justify-center p-[0.625rem]'>
        <h1 className='font-work-sans text-base text-primary-text'>Kick off your betting journey with
          <span className='text-[1.25rem] text_primary_gradient pl-2'>2X rewards!</span></h1>
      </section>

      <section className='max-md:px-[20px] max-w-[1440px] mx-auto py-[3.75rem]'>

        <div className='flex items-start text-[2.5rem] mx-20'>
          <div className='relative '><span className='uppercase text_primary_gradient'>Khelo</span><span className='uppercase text-primary-text'>star </span>
            <img className='absolute' rel="preload" fetchpriority="high" as="image" type="image/svg" src='/assets/images/khelostar_text_bottom_garnish.svg' alt="khelostar_text_bottom_garnish" />
          </div>
          <span className='pl-[0.5rem] text-primary-text'>- Official Online site for sports betting & casino in India</span>
        </div>

        <div className='flex justify-center mt-[4.375rem]'>
          <div className='flex-none basis-1/2'>
            <div>
              <p className='text-[#B4B4B4] font-normal'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad </p>
            </div>
            <div className='flex gap-[24px] py-10 '>
              <div className='w-[15.438rem] h-[3.375rem] gradient-border-gradient font-bold text-[0.875rem] font-work-sans uppercase relative'>
                <button className='cursor-pointer w-[15.25rem] h-[3.2rem] gradient-border-gradient_in bg-primary-black absolute top-[1.6px] left-[1.5px] uppercase text-primary-text'>Get Bonuses</button>
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} className='flex justify-center items-center btn_reflection relative overflow-hidden cursor-pointer gradient-border-gradient w-[15.438rem] h-[3.375rem] rounded-[3.125rem] font-bold text-[0.875rem] font-work-sans uppercase text-primary-text'>Sign Up</a>
            </div>
          </div>
          <div>
            <img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/fast_cash.webp" alt="fast_cash" />
          </div>
        </div>

      </section>

      <section className='max-md:px-[20px] max-w-[1440px] mx-auto py-[3.75rem] flex gap-[19px] justify-center'>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/kabaddi.svg" alt="Kabaddi" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Kabaddi</p>
            </div>
          </div>
        </div>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/slot.svg" alt="slot" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Slot Games</p></div>
          </div>
        </div>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/cricket.svg" alt="cricket" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Cricket</p></div>
          </div>
        </div>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/aviator.svg" alt="aviator" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Aviator</p></div>
          </div>
        </div>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/live_game.svg" alt="live_game" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Live Games</p></div>
          </div>
        </div>
        <div className='cursor-pointer bg-[#202020] rounded-2xl shadow-[0_4px_6px_-1px_rgba(39,39,39,0.25)]'>
          <div className='flex flex-col gap-[13px] py-4 px-[58px] items-center'>
            <div><img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/circle_slot.svg" alt="circle_slot" /></div>
            <div><p className='text-[1.125rem] font-semibold text-primary-text'>Slot Games</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex justify-center'>
          <span className='text_primary_gradient text-[40px] font-bold uppercase'>Top betting</span>
          <span className='text-primary-text pl-2 text-[40px] font-bold uppercase'>Games</span>
        </div>
        <div className='mt-6'>
          <div className='relative'>
            <img className='w-full' rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/top_gaming_banner.webp" alt="top_gaming_banner" />
            <div className='absolute bottom-[18px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className="relative button-wrapper">
                <a href="#" onClick={(e) => e.preventDefault()} className='flex justify-center items-center text-2xl font-bold uppercase h-[3.375rem] w-[26rem] bg-black text-primary-text rounded-[3.125rem] border-0 cursor-pointer' type="button">Get Bonuses</a>
                <div className="cursor-pointer button_gradient z-[-1] absolute top-0 left-0 w-[calc(26.0625rem+0.125rem)] h-[calc(3.5rem+0.125rem)] rounded-[3.125rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-md:px-[20px] max-w-[1440px] mx-auto my-[4.375rem]'>

        <div className='flex justify-center items-center gap-5 p-6'>
          <div className='flex-none basis-1/2'>
            <div>
              <p className='font-bold text-2xl text-primary-text uppercase'>Khelostar Official Website</p>
            </div>
            <div className='pt-4'>
              <p className='text-[#B4B4B4] font-normal'>After registration, the player receives all the benefits of cooperation with the bookmaker 4rabet. There is a lucrative bonus system, the ability to Khelostar play online in the demo and full version, bet on your favorite team, or try virtual sports. Registration Khelostar also allows you to subscribe to newsletters so you don’t miss out on valuable information, such as lucrative</p>
            </div>
            <div className='flex gap-[24px] py-10 '>
              <a href="#" onClick={(e) => e.preventDefault()} className='flex justify-center items-center btn_reflection relative overflow-hidden cursor-pointer gradient-border-gradient w-[15.438rem] h-[2.875rem] rounded-[3.125rem] font-bold text-[0.875rem] font-work-sans uppercase text-primary-text'>Join Now</a>
            </div>
          </div>
          <div>
            <img rel="preload" fetchpriority="high" as="image" type="image/svg" src="/assets/images/first_withdrawal.webp" alt="Official_website" />
          </div>
        </div>

      </section>


      <InteractiveTimeline data={{ ...section1Data, timelineData: timelineData }} />

      <InteractiveTimeline isReverse={true} data={{ ...section2Data, timelineData: timelineData2 }} />

      <InteractiveTimeline data={{ ...section3Data, timelineData: timelineData3 }} />

      <HowToBatDataCard />

      <RecommendedGamesMain />

      <BonusOfferMain />

      <OffersMain />

      <div className='flex w-full max-md:px-[20px] max-w-[1440px] mx-auto'>
        <div className='flex-1'>
          <DepositeWithdrawMain isFlexCol={true} data={{ ...DepositeImgData, timelineData: DepositeData }} />
        </div>
        <div className='flex-1'>
          <DepositeWithdrawMain isFlexCol={true} data={{ ...WithdrawalImgData, timelineData: WithdrawalData }} />
        </div>
      </div>




    </>
  )
}

export default App
