import { useState } from 'react';

const bounusOfferDataVendor = [
    {
        id: 1,
        title: "Live",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 2,
        title: "Line",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 3,
        title: "Cricket",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 4,
        title: "Casino games",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 5,
        title: "TV games",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 6,
        title: "Virtual sports",
        description: "Lorem Ipsum is simply dummy text of the printing",

    },
    {
        id: 7,
        title: "E-sports",
        description: "Lorem Ipsum is simply dummy text of the printing",

    }

];

const useBounusOfferData = () => {
    const [subTitle] = useState("Khelostar");
    const [mainTitle] = useState("Bonus & Prom0tions");

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

    const bounusOfferDataBinding = bounusOfferDataVendor.map((game, index) => ({
        ...game,
        image: offerSecImgs[index],
    }));

    return {
        mainTitle,
        subTitle,
        bounusOfferDataBinding,
    };
};



export { bounusOfferDataVendor, useBounusOfferData };
