import { useState } from 'react';

const OfferDataVendor = [
    {
        id: 1,
        title: "Live",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 2,
        title: "Line",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 3,
        title: "Cricket",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 4,
        title: "Casino games",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 5,
        title: "TV games",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 6,
        title: "Virtual sports",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    },
    {
        id: 7,
        title: "E-sports",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",

    }

];

const useOfferData = () => {
    const [mainTitle] = useState("What");
    const [subTitle] = useState("Khelostar ");
    const [second_mainTitle] = useState("Offers")

    const offerSecImgs = [
        "/assets/images/offers/other_live.svg",
        "/assets/images/offers/other_line.svg",
        "/assets/images/offers/other_cricket.svg",
        "/assets/images/offers/other_casino.svg",
        "/assets/images/offers/other_tv.svg",
        "/assets/images/offers/other_virtual.svg",
        "/assets/images/offers/other_esport.svg",
    ];

    //  saurabh :-  Combine the game data with images

    const offerDataBinding = OfferDataVendor.map((game, index) => ({
        ...game,
        image: offerSecImgs[index],
    }));

    return {
        mainTitle,
        subTitle,
        second_mainTitle,
        offerDataBinding,
    };
};

export { OfferDataVendor, useOfferData };
