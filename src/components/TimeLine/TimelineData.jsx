const timelineData = [
    {
        id: 1,
        title: "Visit the Official Site sec one",
        description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris proin proin integer purus vulputate. Pellentesque."
    },
    {
        id: 2,
        title: "Create an Account",
        description: "Lorem ipsum dolor sit amet consectetur. Viverra cursus at enim risus a a amet. Euismod pellentesque nec dictum ac.",
    },
    {
        id: 3,
        title: "Choose Your Betting Preferences",
        description: "Lorem ipsum dolor sit amet consectetur. Viverra cursus at enim risus a a amet. Euismod pellentesque nec dictum ac.",
    },
    {
        id: 4,
        title: "Confirm Your Details",
        description: "Lorem ipsum dolor sit amet consectetur. Justo dui urna feugiat libero enim. Nisi egestas suspendisse scelerisque.",
    },
    {
        id: 5,
        title: "Receive Your Kelostar ID",
        description: "Lorem ipsum dolor sit amet consectetur. Nec ullamcorper euismod velit molestie morbi. Iaculis vitae tortor libero cras egestas sapien et. Platea urna nisi tristique volutpat."
    }
];

const timelineData2 = [
    {
        id: 1,
        title: "Visit the Khelostar Website",
        description: "Open your web browser of choice and head to the Khelostar site."
    },
    {
        id: 2,
        title: "Click on ‘Login’",
        description: "On the home page, search for ‘Login’ and click on it. On the home page, search for ‘Login’ and click on it.",
    },
    {
        id: 3,
        title: "Enter Your Credentials",
        description: "Provide your email address or phone number and the password registered with the email/phone number.",
    },
    {
        id: 4,
        title: "Click on ‘Submit’ or ‘Login’",
        description: "After putting in your details, press the ‘Submit’ or ‘Login’ button.",
    },
    {
        id: 5,
        title: "Two-Factor Authentication (if enabled)",
        description: "If you have two-factor authentication set up, make sure you enter the code sent to your email or phone number you registered with."
    }
];

const timelineData3 = [
    {
        id: 1,
        title: "Go to the Khelostar Official Website",
        description: "Launch your internet browser and access the Khelostar website."
    },
    {
        id: 2,
        title: "Locate and Click on the 'Sign-Up' Button",
        description: "On the main page, try to look for the “Sign Up” or “Register” button and click on it.",
    },
    {
        id: 3,
        title: "Fill Your Information",
        description: "Type in your name, email, phone number, password, and other required fields if any. Use a strong password",
    },
    {
        id: 4,
        title: "Click on the Terms and Conditions",
        description: "Terms and conditions are to be followed, hence read them. If you wish to accept these terms, tick the box.",
    },
];

const section1Data = {
    src: '/assets/images/vip_image.webp',
    alt: "vip_image",
    heading: "Get Your Khelostar ID in 1 Minute",
};

const section2Data = {
    src: '/assets/images/register_section.webp',
    alt: "register_section",
    heading: "Khelostar Signup Process",
};

const section3Data = {
    src: '/assets/images/login_section.webp',
    alt: "login_section",
    heading: "Khelostar Login Process",
};

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

export { timelineData, timelineData2, timelineData3, section1Data, section2Data, section3Data, getButtonText };