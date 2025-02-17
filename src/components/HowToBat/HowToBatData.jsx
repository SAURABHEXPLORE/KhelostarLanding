import { useState } from 'react';

const howToBatData = [
    {
        id: 1,
        title: "Log In to Your Account",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 1
    },
    {
        id: 2,
        title: "Deposit Money",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 2
    },
    {
        id: 3,
        title: "Go to the Sportsbook",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 3
    },
    {
        id: 4,
        title: "Pick a Sport",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 4
    },
    {
        id: 5,
        title: "Select an Event",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 5
    },
    {
        id: 6,
        title: "Choose Your Bet Type",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 6
    },
    {
        id: 7,
        title: "Enter Your Bet Amount",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 7
    },
    {
        id: 8,
        title: "Enter Amount and Confirm",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 8
    },
    {
        id: 9,
        title: "Track Bet",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        stepNumber: 9
    },
];

const useHowToBatData = () => {
    const [mainTitle, setMainTitle] = useState("How to Bat");
    const [subTitle, setSubTitle] = useState("Master the Basics");

    return {
        howToBatData,
        mainTitle,
        subTitle,
        setMainTitle,
        setSubTitle
    };
};

export { howToBatData, useHowToBatData };
