let products = [
    {
        id: 2001,
        title: "Chess Club",
        subject: "Strategic Thinking",
        location: "Classroom",
        price: 900,
        availableInventory: 20,
        description: "Master strategic thinking and improve problem-solving skills through chess.",
        image: "/frontend/image/chess.jpeg", // Ensure this path is correct
        extraActivities: [
            { name: "Weekly Tournaments", description: "Compete with peers and improve strategy." },
            { name: "Strategy Sessions", description: "Learn advanced techniques for winning." },
            { name: "Game Analysis", description: "Review and analyze past games for improvement." }
        ]
    },
    {
        id: 2002,
        title: "Robotics Workshop",
        subject: "Engineering and Programming",
        location: "Workshop Room",
        price: 1800,
        availableInventory: 15,
        description: "Build and program robots to solve real-world challenges.",
        image: "image/robotics.jpeg",
        extraActivities: [
            { name: "Robotics Challenges", description: "Tackle weekly design and programming tasks." },
            { name: "Programming Basics", description: "Learn coding essentials for robotics." },
            { name: "Exhibition Day", description: "Showcase robots to family and friends." }
        ]
    },
    {
        id: 2003,
        title: "Drama and Theatre Club",
        subject: "Creative Arts",
        location: "Drama Room",
        price: 1000,
        availableInventory: 10,
        description: "Unleash your creativity and build confidence through acting.",
        image: "image/drama.jpeg",
        extraActivities: [
            { name: "Script Reading", description: "Interpret scripts and understand characters." },
            { name: "Improvisation", description: "Enhance spontaneity and creativity on stage." },
            { name: "Theatre Performance", description: "Perform in a live play for an audience." }
        ]
    },
    {
        id: 2004,
        title: "STEM Exploration Club",
        subject: "Science and Technology",
        location: "Science Lab",
        price: 800,
        availableInventory: 12,
        description: "Dive into the world of science, technology, engineering, and mathematics.",
        image: "image/stem.png",
        extraActivities: [
            { name: "Science Experiments", description: "Hands-on experiments to explore scientific concepts." },
            { name: "Coding Basics", description: "Learn the fundamentals of programming." },
            { name: "Engineering Challenges", description: "Design and build small projects." }
        ]
    },
    {
        id: 2005,
        title: "Photography Club",
        subject: "Art and Design",
        location: "Photography Studio",
        price: 1100,
        availableInventory: 10,
        description: "Capture stunning photos and enhance them with editing skills.",
        image: "image/photograpgy.jpeg",
        extraActivities: [
            { name: "Photo Walks", description: "Explore outdoor photography in different settings." },
            { name: "Editing Sessions", description: "Learn to edit and enhance photos." },
            { name: "Monthly Competitions", description: "Compete and showcase your photography skills." }
        ]
    },
    {
        id: 2006,
        title: "Yoga and Mindfulness Classes",
        subject: "Health and Wellness",
        location: "Yoga Room",
        price: 900,
        availableInventory: 15,
        description: "Relax and rejuvenate with yoga and mindfulness exercises.",
        image: "image/yoga.jpeg",
        extraActivities: [
            { name: "Breathing Techniques", description: "Learn to calm your mind through breathing exercises." },
            { name: "Yoga Poses", description: "Improve flexibility with guided yoga routines." },
            { name: "Meditation Sessions", description: "Enhance focus and inner peace through meditation." }
        ]
    },
    {
        id: 2007,
        title: "Soccer Training Program",
        subject: "Sports",
        location: "Soccer Field",
        price: 1200,
        availableInventory: 20,
        description: "Learn and master soccer techniques with experienced coaches.",
        image: "image/soccer.jpeg",
        extraActivities: [
            { name: "Skill Drills", description: "Practice passing, dribbling, and shooting." },
            { name: "Match Strategies", description: "Learn formations and tactics for gameplay." },
            { name: "Team Matches", description: "Play in weekly matches to improve teamwork." }
        ]
    },
    {
        id: 2008,
        title: "Basketball Training Program",
        subject: "Sports",
        location: "Basketball Court",
        price: 1300,
        availableInventory: 15,
        description: "Develop basketball skills and build fitness through training.",
        image: "image/basketball.jpeg",
        extraActivities: [
            { name: "Shooting Practice", description: "Improve shooting accuracy and techniques." },
            { name: "Game Tactics", description: "Understand offensive and defensive strategies." },
            { name: "Mini Tournaments", description: "Participate in small tournaments to enhance skills." }
        ]
    },
    {
        id: 2009,
        title: "Volleyball Training Program",
        subject: "Sports",
        location: "Volleyball Court",
        price: 1300,
        availableInventory: 15,
        description: "Learn volleyball skills and build team spirit.",
        image: "image/vollyball.jpeg",
        extraActivities: [
            { name: "Serving Drills", description: "Master the art of serving and spiking." },
            { name: "Game Coordination", description: "Improve communication and teamwork." },
            { name: "Friendly Matches", description: "Apply skills in weekly friendly matches." }
        ]
    },
    {
        id: 2010,
        title: "Guitar Lessons",
        subject: "Music",
        location: "Music Room",
        price: 1400,
        availableInventory: 12,
        description: "Learn to play the guitar with professional guidance.",
        image: "image/guitar.jpeg",
        extraActivities: [
            { name: "Jam Sessions", description: "Practice playing in a group setting." },
            { name: "Music Theory", description: "Understand the basics of music theory." },
            { name: "Songwriting Classes", description: "Learn to compose and write your own music." }
        ]
    },
    {
        id: 2011,
        title: "Dance Classes",
        subject: "Performing Arts",
        location: "Dance Room",
        price: 1000,
        availableInventory: 18,
        description: "Learn various dance styles, from hip-hop to classical ballet.",
        image: "image/dance.jpeg",
        extraActivities: [
            { name: "Choreography Sessions", description: "Work on dynamic choreographies for performances." },
            { name: "Freestyle Dance", description: "Unleash your creativity with freestyle movements." },
            { name: "Dance Showcases", description: "Perform on stage at the end of the course." }
        ],
        styles: [
            { id: 1, name: "Hip-Hop", description: "Learn cool moves and grooves.", price: 1200 },
            { id: 2, name: "Classical Ballet", description: "Graceful and disciplined dance style.", price: 1500 },
            { id: 3, name: "Salsa", description: "A lively and passionate Latin dance.", price: 1300 },
            { id: 4, name: "Contemporary", description: "Express yourself through fluid movements.", price: 1400 }
        ]
    }
];
