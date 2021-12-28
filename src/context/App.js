import { createContext, useReducer } from "react";

const getData = () => {
    let data = [
        {
            id: 1,
            company: "Photosnap",
            logo: "photosnap",
            new: true,
            featured: true,
            position: "Senior Frontend Developer",
            role: "Frontend",
            level: "Senior",
            postedAt: "1d ago",
            contract: "Full Time",
            location: "USA Only",
            languages: ["HTML", "CSS", "JavaScript"],
            tools: [],
        },
        {
            id: 2,
            company: "Manage",
            logo: "manage",
            new: true,
            featured: true,
            position: "Fullstack Developer",
            role: "Fullstack",
            level: "Midweight",
            postedAt: "1d ago",
            contract: "Part Time",
            location: "Remote",
            languages: ["Python"],
            tools: ["React"],
        },
        {
            id: 3,
            company: "Account",
            logo: "account",
            new: true,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2d ago",
            contract: "Part Time",
            location: "USA Only",
            languages: ["JavaScript"],
            tools: ["React", "Sass"],
        },
        {
            id: 4,
            company: "MyHome",
            logo: "myhome",
            new: false,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "5d ago",
            contract: "Contract",
            location: "USA Only",
            languages: ["CSS", "JavaScript"],
            tools: [],
        },
        {
            id: 5,
            company: "Loop Studios",
            logo: "loopStudios",
            new: false,
            featured: false,
            position: "Software Engineer",
            role: "Fullstack",
            level: "Midweight",
            postedAt: "1w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["JavaScript"],
            tools: ["Ruby", "Sass"],
        },
        {
            id: 6,
            company: "FaceIt",
            logo: "faceit",
            new: false,
            featured: false,
            position: "Junior Backend Developer",
            role: "Backend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "UK Only",
            languages: ["Ruby"],
            tools: ["RoR"],
        },
        {
            id: 7,
            company: "Shortly",
            logo: "shortly",
            new: false,
            featured: false,
            position: "Junior Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["HTML", "JavaScript"],
            tools: ["Sass"],
        },
        {
            id: 8,
            company: "Insure",
            logo: "insure",
            new: false,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "USA Only",
            languages: ["JavaScript"],
            tools: ["Vue", "Sass"],
        },
        {
            id: 9,
            company: "Eyecam Co.",
            logo: "eyecamCo",
            new: false,
            featured: false,
            position: "Full Stack Engineer",
            role: "Fullstack",
            level: "Midweight",
            postedAt: "3w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["JavaScript", "Python"],
            tools: ["Django"],
        },
        {
            id: 10,
            company: "The Air Filter Company",
            logo: "theAirFilterCompany",
            new: false,
            featured: false,
            position: "Front-end Dev",
            role: "Frontend",
            level: "Junior",
            postedAt: "1mo ago",
            contract: "Part Time",
            location: "Worldwide",
            languages: ["JavaScript"],
            tools: ["React", "Sass"],
        },
    ];

    data.forEach(item => {
        item.keywords = [item.role, item.level, ...item.languages, ...item.tools];
    })

    return data;
};

const AppInitialState = {
    data: getData(),
    result: getData(),
    dispatch: null
};
const AppContext = createContext(AppInitialState);

function AppReducer(state, { type, payload }) {
    switch (type) {
        case "SET_RESULT":
            return { ...state, result: payload };

        case "":
            return { ...state, keys: payload };

        default:
            return state;
    }
}

function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, AppInitialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
