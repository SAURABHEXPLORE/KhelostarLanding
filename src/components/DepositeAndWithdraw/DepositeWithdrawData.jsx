const DepositeData = [
    { id: 1, title: "Visit the Official Site sec one", description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris proin proin integer purus vulputate. Pellentesque." },
    { id: 2, title: "Create an Account", description: "Lorem ipsum dolor sit amet consectetur. Viverra cursus at enim risus a a amet. Euismod pellentesque nec dictum ac." },
    { id: 3, title: "Choose Your Betting Preferences", description: "Lorem ipsum dolor sit amet consectetur. Viverra cursus at enim risus a a amet. Euismod pellentesque nec dictum ac." },
    { id: 4, title: "Confirm Your Details", description: "Lorem ipsum dolor sit amet consectetur. Justo dui urna feugiat libero enim. Nisi egestas suspendisse scelerisque." },
    { id: 5, title: "Receive Your Kelostar ID", description: "Lorem ipsum dolor sit amet consectetur. Nec ullamcorper euismod velit molestie morbi. Iaculis vitae tortor libero cras egestas sapien et. Platea urna nisi tristique volutpat." }
];

const WithdrawalData = [
    { id: 1, title: "Visit the Khelostar Website", description: "Open your web browser of choice and head to the Khelostar site." },
    { id: 2, title: "Click on ‘Login’", description: "On the home page, search for ‘Login’ and click on it." },
    { id: 3, title: "Enter Your Credentials", description: "Provide your email address or phone number and the password registered with the email/phone number." },
    { id: 4, title: "Click on ‘Submit’ or ‘Login’", description: "After putting in your details, press the ‘Submit’ or ‘Login’ button." },
    { id: 5, title: "Two-Factor Authentication (if enabled)", description: "If you have two-factor authentication set up, make sure you enter the code sent to your email or phone number you registered with." }
];


const DepositeImgData = {
    src: '/assets/images/deposite_money.png',
    alt: "vip_image",
    heading: "How to Deposit Money IN KheloStar",
    timelineData: DepositeData,
    getButtonText: () => "Sign up & Deposit"
};

const WithdrawalImgData = {
    src: '/assets/images/withdrawal_money.png',
    alt: "register_section",
    heading: "How to Withdrawals Money IN KheloStar",
    timelineData: WithdrawalData,
    getButtonText: () => "Make Withdrawal"
};

const depositeWithdrawalTitle = () => {
    const [mainTitle] = useState("What");
    const [subTitle] = useState("Khelostar");
    const [second_mainTitle] = useState("Offers")
};



export { DepositeData, WithdrawalData, DepositeImgData, WithdrawalImgData, depositeWithdrawalTitle };

