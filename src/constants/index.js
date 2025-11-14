export const myProjects = [
  {
    id: 1,
    title: "DieknoBeats – Online Music & Beat Selling Platform",
    description:
      "A full-stack platform for selling beats, managing user accounts, uploading music securely, and handling authentication using Next.js and NextAuth.",
    subDescription: [
      "Built using Next.js App Router with a modern, responsive UI powered by TailwindCSS and shadcn/UI components.",
      "Implemented secure authentication using NextAuth with Google OAuth and Credential login.",
      "Integrated AWS S3 for secure and scalable audio file uploads and public/private file access.",
      "Added protected routes, session management, and server actions to handle user data safely.",
      "Designed a modular MVC-like folder structure with reusable UI components and API routes.",
    ],
    href: "https://github.com/Samyak507/dieknobeats-nextjs-nextAuth-googleOAuth-awsS3-shadcnUI",
    logo: "/assets/logos/nextjs.svg",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "NextAuth",
        path: "/assets/logos/nextauth.png",
      },
      {
        id: 3,
        name: "AWS S3",
        path: "/assets/logos/aws-s3.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "shadcn/ui",
        path: "/assets/logos/shadcnui.png",
      },
    ],
  }
  ,
  {
    id: 2,
    title: "Dating App",
    description:
      "A social matching app designed to help users find meaningful connections through profile swiping, chatting, and more.",
    subDescription: [
      "Implemented user authentication and profile management to let users create and edit their dating profiles.",
      "Built a swipe-based matching UI to allow users to like or pass on profiles.",
      "Integrated real-time chat functionality to enable conversations between matched users.",
      "Designed a responsive front-end to work well on both mobile and desktop.",
      "Optimized backend for scalability, with efficient data fetching and state management.",
    ],
    href: "https://dating-app-mingle-1.vercel.app/",
    logo: "/assets/logos/react.svg",     // Update if you're using some other logo
    image: "/assets/projects/dating-app.jpg",  // Use a relevant screenshot or mockup
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "WebSockets",
        path: "/assets/logos/websocket.svg",
      },
    ],
  }
  ,
  {
    id: 3,
    title: "Real-Time Chat & Bot Platform",
    description:
      "A full-stack Next.js application enabling live one-to-one and group chat, streaming message updates, and integration of a chat bot interface using Stream Chat SDK.",
    subDescription: [
      "Built with Next.js and React, leveraging the App Router architecture for scalable UI and routing.",
      "Integrated the Stream Chat SDK for real-time messaging, threads, reactions, and streaming updates.",
      "Developed a chatbot component for automated responses and streaming message flows.",
      "Implemented authentication (via NextAuth or custom) and persistent chat history storage.",
      "Styled with TailwindCSS (and optional UI library) to deliver a polished, mobile-first experience."
    ],
    href: "https://chat-bot-normal-chat-stream-chat-ne.vercel.app/",
    logo: "/assets/logos/nextjs.svg",
    image: "/assets/projects/chat-platform.jpg",  // Replace with actual screenshot
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Stream Chat",
        path: "/assets/logos/stream-chat.svg",
      },
      {
        id: 3,
        name: "WebSockets",
        path: "/assets/logos/websocket.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Chatbot",
        path: "/assets/logos/bot.svg",
      },
    ],
  }
  ,
  {
  id: 4,
  title: "Blog App",
  description:
    "A modern full-stack blogging platform enabling users to create, edit, publish and engage with blog posts — built with Next.js and a backend API.",
  subDescription: [
    "Implemented user authentication and authorization so users can sign-in and manage their posts.",
    "Created blog post CRUD (Create, Read, Update, Delete) functionality along with rich text editing capabilities.",
    "Built comment and like system to facilitate engagement on posts.",
    "Designed responsive UI using TailwindCSS and optimized for performance and SEO.",
    "Deployed the application using Vercel and integrated a database (e.g., MongoDB, Prisma) to persist posts and user data."
  ],
  href: "https://blog-app-frontend-three-sand.vercel.app/",
  logo: "/assets/logos/nextjs.svg",
  image: "/assets/projects/blog-app.jpg",  // replace with actual screenshot
  tags: [
    { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
    { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    { id: 3, name: "Prisma", path: "/assets/logos/prisma.svg" },
    { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    { id: 5, name: "Vercel", path: "/assets/logos/vercel.svg" }
  ]
}
,
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/samyakjain507",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/justt.samyak?igsh=d3NlcTRqNXllajBs",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "MERN Stack Developer Intern",
    job: "Tresveze & Co.",
    date: "May, 2025 - July, 2025",
    contents: [
      "Engineered the seamless integration of 20+ RESTful APIs in partnership with backend teams, reducing data mismatch errors by 15% and ensuring 99% uptime for critical user-facing features.",
      "Implemented over 15 design refinements and client-driven feature enhancements, boosting user engagement metrics by 10% and ensuring full compliance with brand standards.",
      "Developed applications for industrial automation",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: " Full Stack Developer",
    job: "LastRaven",
    date: "September, 2024 - November, 2025",
    contents: [
      " Refined a server-side rendered (SSR) tech news platform using Next.js, achieving a 35% improvement in Lighthouse performance scores and reducing initial page load time by 500ms.",
      "Integrated a third-party NLP chatbot via REST API to handle user queries, which automated responses for over 25 frequently asked questions and increased user session duration by 15%.",
      "✅ Implemented secure APIs, following automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "MERN Stack Developer",
    job: "FalakTak Travel",
    date: "July, 2024 - September, 2024",
    contents: [
      " Architected and launched a full-stack travel booking platform for FalakTak Travels using the MERN stack, featuring a secure payment gateway integration and a real-time availability calendar.",
      "Planned an intuitive, 5-step booking workflow that reduced user drop-off by 30% and increased successful trip reservations by 45% within the first quarter post-launch",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
