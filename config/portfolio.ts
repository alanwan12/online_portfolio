// ======================================================
// PORTFOLIO CONFIG -- Alan Wan
// ======================================================
// All of the site's content lives in this file.
//   **text**  -> bold emphasis
//   [[text]]  -> spaced-out letter tracking
//   {{Tool}}  -> inline tool chip (techStackProse only)

export interface RoleDef {
  title: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  /** Optional: shown instead of "start - end" (e.g. "Summer 2025"). */
  period?: string;
  bullets: string[];
  tech: string[];
}

export interface CompanyDef {
  company: string;
  photo: string;
  isCurrent: boolean;
  roles: RoleDef[];
}

export interface ProjectDef {
  title: string;
  tagline: string;
  /** Honest state of the project, shown as a small label. */
  status?: string;
  /** e.g. "Jan 2026 / Honors PLTW Digital Electronics". */
  context?: string;
  description?: string[];
  tech: string[];
  images?: { src: string; alt: string }[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
}

const DOCS = "https://docs.google.com/document/d/";

export const portfolio = {
  // -- Identity ------------------------------------------------------------
  name: "Alan Wan",
  headshot: "/img/headshot.png",
  location: "Los Angeles, CA",

  // -- Bio -----------------------------------------------------------------
  bio: [
  "I'm **Alan Wan**, a **Computer Science & Engineering student at UCLA** in **Los Angeles, CA**. I got into building things through **video games**, and I've never really stopped asking how the pieces of a system fit together, whether that's code, a circuit or a team.",
  "I like working where **software meets hardware**: writing Python, JavaScript, Java and C++, teaching small models to recognize patterns, and then getting a servo, a sensor or a laser-cut part to do what the code says. Seeing logic move something in the real world is still my favorite feeling in engineering.",
  "The idea I come back to most is **bridge-building**: between abstract logic and real human needs, and between people who see a problem differently. I grew up as the family translator and helper, and I've learned that the best solutions start with listening. When I disagree with a teammate, I'd rather build a quick test we can both look at than argue opinions.",
  "I'm not the loudest person in the room. I believe in **showing up every day** and caring more about the process than the result. Sprinting and **pole vaulting** taught me that, and when a hamstring injury sidelined me I switched to filming technique and coaching younger vaulters instead. My parents' favorite saying fits: ‘dripping water can penetrate a stone’.",
  "Outside of class I'm a night owl who reads **manga** and classic literature, writes **short stories and poetry**, plays **piano**, and plays **chess** and strategy games, where I'm usually the one calling the plan. I'm also the family's summer cook (French toast is my specialty), and I like quiet time to think things through.",
],

  // Call to action shown after the bio (the buttons below it link to Projects and Email)
  cta: "I'm looking for software engineering and applied AI/ML roles. Have a look at my projects, or get in touch.",

  // -- Social Links (leave "" to hide) --------------------------------------
  social: {
    email: "alan.y.wan@gmail.com",
    github: "https://github.com/alanwan12",
    linkedin: "https://www.linkedin.com/in/alan-wan-bb6bb639b/",
    resume: "", // add a resume link or a PDF in /public to show a Resume button
  },

  // -- Tech Stack ----------------------------------------------------------
  techStackProse:
    "I mostly write {{Python}} and {{JavaScript}}, with some {{Java}}, {{C++}} and {{Lua}}. For web projects I use {{Node.js}}, {{Socket.io}} and {{p5.js}}; for ML and vision I use {{PyTorch}}, {{ml5.js}} and {{OpenCV}}; for hardware I build on {{Raspberry Pi}} with breadboard and digital-electronics work. I'm currently studying LLM reasoning and retrieval-augmented generation.",

  techStackCategories: [
    {
      category: "Programming",
      tools: ["Python", "JavaScript", "Java", "C++", "Lua", "HTML", "CSS"],
    },
    {
      category: "Web & Frameworks",
      tools: ["Node.js", "Socket.io", "p5.js", "ml5.js"],
    },
    {
      category: "ML & Vision",
      tools: ["PyTorch", "OpenCV", "ml5.js"],
    },
    {
      category: "Hardware & Electronics",
      tools: ["Raspberry Pi", "Multisim", "Breadboarding", "555 Timer", "Servo & Motor Control", "Ultrasonic & Sound Sensing"],
    },
    {
      category: "Design & Fabrication",
      tools: ["Onshape", "CAD & 3D Modeling", "Laser Cutting"],
    },
    {
      category: "Developer Tools",
      tools: ["Git", "GitHub", "Linux", "Visual Studio", "Xcode", "Google Workspace"],
    },
  ],

  // -- Story So Far ----------------------------------------------------------
  experience: [
    {
      company: "UCLA",
      photo: "",
      isCurrent: true,
      roles: [
        {
          title: "Computer Science & Engineering (B.S.)",
          type: "Student",
          location: "Los Angeles, CA",
          startDate: "Fall 2026",
          endDate: "Present",
          bullets: [
            "Expected graduation June 2030.",
            "This quarter: CS 31 (Intro to CS I), Math 32A (Multivariable Calculus), ENGR 1 (Intro to Machine Learning), History 11A, CS 1 (Freshman Seminar).",
            "Planning next (not yet taken): CS 32, CS 35L, CS 180, CS 111.",
          ],
          tech: ["Python", "C++"],
        },
        {
          title: "Member, ACM AI & ACM ICPC",
          type: "Clubs",
          location: "Los Angeles, CA",
          startDate: "2026",
          endDate: "Present",
          bullets: ["Currently a member of ACM AI and ACM ICPC."],
          tech: [],
        },
        {
          title: "Bruin Software Engineering Fellowship",
          type: "Program",
          location: "Los Angeles, CA",
          startDate: "2026",
          endDate: "Present",
          bullets: ["Part of the Bruin Software Engineering Fellowship program."],
          tech: [],
        },
      ],
    },
    {
      company: "UCSD COSMOS",
      photo: "",
      isCurrent: false,
      roles: [
        {
          title: "Autonomous Robotics, Cluster 10",
          type: "Summer Program",
          location: "San Diego, CA",
          startDate: "2025",
          endDate: "2025",
          period: "2025 (4 weeks)",
          bullets: [
            "Week 1, balloon-popping robots: assembled a Raspberry Pi chassis, wired motors and a battery pack, coded over RealVNC, and added servo pincer arms, a battering ram and cardboard armor. We didn't win, but I got real electrical-engineering practice.",
            "Week 2, maze-following robots: used the Pi camera and OpenCV to mask purple/orange sticker trails, counting pixels in the left, middle and right of the view to steer. We got through much of the maze but didn't finish it.",
            "Week 3, walking robots: with my partner, built a turtle-style flipper walker on a cardboard chassis (four servos, no wheels); it posted the second-fastest time in the race.",
            "Week 4, final project: co-designed an autonomous Tesla Cybertruck model in Onshape to assist new learning drivers, with four-wheel drive, servo steering, parallel parking, traffic-light detection, sound-triggered stop/go and ultrasonic obstacle avoidance, all in one finite-state-machine program.",
            "The final project earned the support of Associate Professor Nicholas G. Gravish, and I presented it at COSMOS's closing showcase.",
          ],
          tech: ["Raspberry Pi", "Python", "OpenCV", "Onshape", "Laser Cutting"],
        },
      ],
    },
    {
      company: "Dublin High School",
      photo: "",
      isCurrent: false,
      roles: [
        {
          title: "Engineering Academy (DEDA)",
          type: "Student",
          location: "Dublin, CA",
          startDate: "2022",
          endDate: "2026",
          bullets: [
            "Project-based engineering pathway focused on problem solving, design thinking, prototyping and collaboration.",
            "Cumulative GPA 4.83 on a 5.0 scale (4.0 unweighted), top 9% of class; SAT 1530.",
            "AP CS Principles, AP CS A, AP Calculus AB/BC, AP Physics C: Mechanics and Honors Digital Electronics.",
          ],
          tech: [],
        },
        {
          title: "Sprinter, Pole Vaulter & Student-Coach",
          type: "Track & Field",
          location: "Dublin, CA",
          startDate: "2022",
          endDate: "2026",
          bullets: [
            "Dual-event athlete; improved my 100m personal record by nearly 2 seconds through consistent, incremental training.",
            "After a hamstring injury ended my junior season, I became a student-coach and film analyst, breaking down technique to mentor younger pole vaulters.",
          ],
          tech: [],
        },
        {
          title: "Inducted Member",
          type: "National Honor Society",
          location: "Dublin, CA",
          startDate: "2023",
          endDate: "2025",
          bullets: ["Contributed to community food drives and outreach."],
          tech: [],
        },
        {
          title: "Competitor",
          type: "Clubs",
          location: "Dublin, CA",
          startDate: "2022",
          endDate: "2026",
          period: "High school",
          bullets: [
            "Gael Force Robotics Club, Chess Club and Math Club, plus competitive math.",
            "Cybersecurity competitions and hackathons, including PicoCTF.",
          ],
          tech: [],
        },
      ],
    },
    {
      company: "Create4Kids",
      photo: "",
      isCurrent: false,
      roles: [
        {
          title: "Officer, Dublin High School Chapter",
          type: "Volunteer",
          location: "Dublin, CA",
          startDate: "2024",
          endDate: "2025",
          bullets: [
            "Helped manage a chapter of a nonprofit that uses art to support children facing serious illness: coordinated meetings, recruited and scheduled volunteer members, and sourced art supplies on a chapter budget.",
            "Organized and led hospital deliveries of handmade holiday cards as the main point of contact with the partner hospital's child-life staff.",
          ],
          tech: [],
        },
      ],
    },
    {
      company: "Family",
      photo: "",
      isCurrent: true,
      roles: [
        {
          title: "Translator, Helper & Navigator",
          type: "Ongoing",
          location: "Dublin, CA",
          startDate: "Ongoing",
          endDate: "Ongoing",
          period: "Ongoing",
          bullets: [
            "Translated and handled technology and paperwork for my grandmother before her move to China, and connected her with community resources.",
            "Primary cook and meal manager for the family each summer.",
          ],
          tech: [],
        },
      ],
    },
  ] as CompanyDef[],

  // -- Projects --------------------------------------------------------------
  projects: [
    {
      title: "Bouncing Ball Simulator",
      tagline: "A seven-segment display circuit that animates two bouncing balls like a CRT screensaver",
      status: "Completed",
      context: "Jan 2026 / Honors PLTW Digital Electronics",
      description: [
        "Team project with Remon Wang, Dhruv Vijaykumar and Sidd Natraj. Eight displays in two rows of four show two balls bouncing inside bracket-shaped walls, driven by a 555 timer that cycles through four states so no segment stays lit long enough to burn in.",
        "My part: designed the logic for two displays (one common cathode, one common anode) with truth tables, simplified Boolean expressions and documented inversions; built and tested it in Multisim and on a breadboard; served as Multisim lead. Solved syncing across four breadboards and dim or dead segments from wrong resistors and faulty wiring.",
      ],
      tech: ["Multisim", "555 Timer", "Breadboarding"],
      images: [
        { src: "/img/bounce-multisim-full.png", alt: "Full Multisim schematic" },
        { src: "/img/bounce-multisim-displays.png", alt: "Multisim display and gate section" },
        { src: "/img/bounce-breadboards.png", alt: "Breadboards wired for the display circuit" },
      ],
      docsUrl: `${DOCS}1YT9chUa2S61zTGAw2838d9S74oxwPRrf/edit?usp=sharing`,
    },
    {
      title: "AOI Medical Patient Monitor",
      tagline: "An AOI-logic control system split into four monitoring subsystems",
      status: "Completed",
      context: "Oct 2025 / Honors PLTW Digital Electronics",
      description: [
        "Team project with Remon Wang, Aarav Kashyap and Prakhar Sharma: six or more inputs and three outputs across a pain/ambient sensor, a respiratory alert, a cardiac system and a master alert system.",
        "My part: built the master alert system, which chooses between an urgent \"code blue\" and a less urgent \"code white\" from the other three subsystems (truth table, simplified Boolean expression, Multisim simulation and breadboard build). I was project manager, kept the project log and co-wrote the documentation.",
      ],
      tech: ["Multisim", "Breadboarding"],
      images: [
        { src: "/img/aoi-multisim.png", alt: "Multisim schematic for the patient monitor" },
        { src: "/img/aoi-breadboard.png", alt: "Four breadboards wired for the patient monitor" },
      ],
      docsUrl: `${DOCS}1JnO8_yyMpUpU5CzhzwIEQDve7X39e8rpZlaqnfiHQ2Q/edit?usp=sharing`,
    },
    {
      title: "COSMOS Autonomous Robotics",
      tagline: "A color-following maze rover and an autonomous Cybertruck model for new learning drivers",
      status: "Completed",
      context: "UCSD COSMOS 2025",
      description: [
        "Rover: OpenCV with a Pi camera detects and masks alternating purple/orange trail markers, computes which third of the frame holds the most color, and steers back toward center to advance through a tunnel obstacle.",
        "Capstone: a laser-cut-acrylic, four-wheel-drive Cybertruck model (CAD in Onshape) with servo front-axle steering, a parallel-parking routine, camera traffic-light detection, sound-triggered stop/go and ultrasonic obstacle avoidance, all wired and coded as one finite-state-machine program. See the full week-by-week write-up under Story So Far.",
      ],
      tech: ["Raspberry Pi", "Python", "OpenCV", "Onshape", "Laser Cutting"],
    },
    {
      title: "Maori",
      tagline: "A real-time multiplayer web version of a traditional family board game",
      status: "Playable",
      context: "Independent project",
      description: [
        "I used to play the board game with my dad's best friend every time I visited him. The web version supports hotseat play for 2-5 players plus real-time online rooms on a local network, with room IDs, spectator mode and rejoin codes.",
        "A p5.js canvas client talks to a Node.js + Socket.io server, deployed on a Raspberry Pi as a persistent systemd service. A local group of about 20 users from my high school played it.",
      ],
      tech: ["p5.js", "Node.js", "Socket.io", "Raspberry Pi"],
    },
    {
      title: "Turbo Tetris",
      tagline: "Tetris built from scratch, with a Train mode that teaches itself to play",
      status: "Playable",
      context: "Independent project",
      description: [
        "A JavaScript Tetris clone on an HTML canvas with levels, save/restore state and sound options. Train mode uses a genetic algorithm: a population of 50 agents evolved against six hand-crafted board-evaluation weights (mutation rate 0.05), saved to localStorage so the best agent can play on its own.",
        "The trained agent won 95% of the time. Testing showed it under-weighted hole avoidance, which is my next tuning step.",
      ],
      tech: ["JavaScript"],
    },
    {
      title: "EcoBin",
      tagline: "A smart recycling bin concept built around a plastic-degrading bacterium",
      status: "Prototype",
      context: "School entrepreneurship competition",
      description: [
        "Designed after I saw littering at a park cleanup, using the bacterium Ideonella sakaiensis. I presented it to 10 industry professionals and a board of 5 judges, all of whom approved of the concept.",
        "It wasn't a very realistic product, but it taught me CAD and the end-to-end entrepreneurship process.",
      ],
      tech: ["Onshape", "CAD & 3D Modeling"],
    },
    {
      title: "ml5 Pixel Classifiers",
      tagline: "Small neural networks trained in the browser on raw pixels, built during the pandemic",
      status: "Unfinished experiments",
      context: "Independent project",
      description: [
        "I wanted an algorithm that could detect people wearing masks. A self-labeling webcam classifier (10x10 px = 300 RGB inputs, 50 epochs), a hand-drawn letter classifier (a-j) that generates its own training samples, and pixel-CNN variants on 64x64 and 128x128 windows.",
        "Honest status: the face-mask version doesn't work yet, and some data and model files aren't in the repo.",
      ],
      tech: ["ml5.js", "p5.js", "JavaScript"],
    },
    {
      title: "Algorithms & Art: Haunted Doors",
      tagline: "An interactive Halloween scene with two doors, each leading to a different animated world",
      status: "Coursework",
      context: "Oct-Nov 2023 / AP CS Principles, with Krishiv Jaini",
      description: [
        "One door reveals three small moving spiders and a big spider on a web; the other, a ghost with two smaller ghosts circling it in a square. I brainstormed the idea with Krishiv and wrote much of the code.",
      ],
      tech: ["Python"],
      images: [
        { src: "/img/halloween-1.png", alt: "Haunted doors scene" },
        { src: "/img/halloween-2.png", alt: "Spider scene" },
        { src: "/img/halloween-3.png", alt: "Ghost scene" },
      ],
      docsUrl: `${DOCS}1ZYjfL3n5qLLMSlzT2fG0EQp5EhKcAqk4mBKSHxETDeA/edit?usp=sharing`,
    },
    {
      title: "Christmas Hangman",
      tagline: "One- or two-player hangman with a Santa hat as an extra body part",
      status: "Coursework",
      context: "Dec 2023 / AP CS Principles, with Ronit Peswani",
      description: [
        "Santa flies across the top of the screen on every correct guess. I was lead coder; Ronit handled documentation and brainstorming.",
      ],
      tech: ["Python"],
      images: [
        { src: "/img/hangman-1.png", alt: "Hangman scene" },
        { src: "/img/hangman-2.png", alt: "Hangman in progress" },
      ],
      docsUrl: `${DOCS}13dRAOZSBiWFAa3VtjtyksoStAt0-A-bjAGUEGzoWubc/edit?usp=sharing`,
    },
    {
      title: "Ping-Pong App",
      tagline: "A single-player ping-pong game with rising speed, sound and a high score",
      status: "Coursework",
      context: "Dec 2022 / CS Essentials, with Zacky Hamsafar",
      description: [
        "The revision added a high score and a random-ball-color button.",
      ],
      tech: [],
      images: [{ src: "/img/pingpong.jpg", alt: "Ping-pong app screenshot" }],
      docsUrl: `${DOCS}1aRqvM3LMu_Meem89_HUBAlce3hZDzeuoMFVD7cWbSdA/edit?usp=sharing`,
    },
    {
      title: "Map It, Drive It",
      tagline: "Navigating a virtual robot through an obstacle course with no dead reckoning",
      status: "Coursework",
      context: "Feb 2023 / CS Essentials, with Ryan Lee",
      description: [
        "My algorithm keeps the robot on the grid border, goes around obstacles, then returns to the border. Ryan built a simpler algorithm from his assigned grids.",
      ],
      tech: [],
      images: [
        { src: "/img/mapit-grid4.png", alt: "4x4 grid" },
        { src: "/img/mapit-grid4path.png", alt: "Path on the 4x4 grid" },
        { src: "/img/mapit-grid9.png", alt: "9x9 grid" },
        { src: "/img/mapit-grid9path.png", alt: "Path on the 9x9 grid" },
      ],
      docsUrl: `${DOCS}13RrYDxL6KMuf1gA26FPmXMr11pch4M0mqtUYIU2Oc9E/edit?usp=sharing`,
    },
  ] as ProjectDef[],

  // -- Honors ----------------------------------------------------------------
  honors: [
    "Regents Scholar (UC Santa Barbara, UC Irvine)",
    "Tri-Valley High School Writer's Contest winner, 2 consecutive years (\"Death's Greatest Lament\", \"Take Your Time\")",
    "Commended Student, National Merit Scholarship Program",
    "AP Scholar with Distinction",
    "Dublin Scholastic Chess Competition winner (multiple times)",
    "Principal's Honor Roll; Academic D Block",
  ],

  // -- Career exploration ------------------------------------------------------
  career: {
    intro: [
      "Top paths: computer scientist, engineer or software developer, with game design and development as a long-standing hobby interest. In freshman seminar, the Interest Profiler and personality and work-value assessments led me to compare careers on salary, demand and required qualifications, and to choose the computer science track in the Engineering Academy. I also explored Codecademy's Machine Learning/AI Engineer, Front-End Engineer and Data Scientist career paths.",
    ],
    speakers: [
      {
        name: "Adam Brown",
        info: "Workday",
        date: "May 23, 2024",
        note: "Started as a CS engineer; stressed internships as a route to long-term employment.",
      },
      {
        name: "Tanish Baranwal",
        info: "UC Berkeley gap-year student, cardiac imaging researcher",
        date: "Dec 1, 2025",
        note: "Advice on research, contacting professors and getting involved in college.",
      },
      {
        name: "David Maino",
        info: "CEO, Atium Engineering (electrical engineer)",
        date: "Apr 20, 2026",
        note: "Power distribution, lighting, fire alarms, and energy systems like solar, batteries and EV chargers.",
      },
    ],
  },
};
