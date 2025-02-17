import { useState } from 'react';

const recommendedGamesData = [
    {
        id: 1,
        title: "Andar Bahar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now",
    },
    {
        id: 2,
        title: "Aviator",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 3,
        title: "Roulette",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 4,
        title: "Black Jack",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 5,
        title: "All Aces Poker",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 6,
        title: "Teen Patti",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 7,
        title: "777 Vegas",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 8,
        title: "21 Burn Black Jack",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    },
    {
        id: 9,
        title: "Bacarrat",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        playText: "Play Now"
    }

];

const useRecommendedGameData = () => {
    const [mainTitle] = useState("How to Bet");
    const [subTitle] = useState("Master the Basics");

    const recommendedImgs = [
        "/assets/images/RecommendedGames/ander_bhar.webp",
        "/assets/images/RecommendedGames/aviator.webp",
        "/assets/images/RecommendedGames/roulet.webp",
        "/assets/images/RecommendedGames/blackjack.webp",
        "/assets/images/RecommendedGames/aces_poker.webp",
        "/assets/images/RecommendedGames/teenpatti.webp",
        "/assets/images/RecommendedGames/vegas.webp",
        "/assets/images/RecommendedGames/burn_blackjack.webp",
        "/assets/images/RecommendedGames/baccarat.webp",
        "/assets/images/RecommendedGames/",
    ];

    //  saurabh :-  Combine the game data with images
    const recommendedGames = recommendedGamesData.map((game, index) => ({
        ...game,
        image: recommendedImgs[index],
    }));

    return {
        mainTitle,
        subTitle,
        recommendedGames,
    };
};

export { recommendedGamesData, useRecommendedGameData };
