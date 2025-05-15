/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hi all, I'm Pankaj 👋",
  logo_name: "Pankaj Mandal",
  nickname: "Mandal",
  subTitle:
    "An enthusiastic Full Stack Software Developer 🚀 with hands-on experience in creating dynamic web and mobile applications using JavaScript, React.js, Node.js, React Native, and a variety of other modern libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1Bv_cE-f81ZjGd8j7QJbwPRlhgYtuQDCI",
  portfolio_repository: "https://github.com/pankajmandal10",
};

const socialMediaLinks = {
  github: "https://github.com/pankajmandal10",
  linkedin: "https://www.linkedin.com/in/pankaj-mandal10/",
  gmail: "pankajmandal10696@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100009425005374",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  display: true, // Set true to display this section, defaults to false
};

const skills = {
  data: [
    // {
    //   title: "Fron-End Developer",
    //   fileName: "ReactJs",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and Realtime projects",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title:
        "AN ENTHUSIASTIC FULL STACK DEVELOPER EXCITED TO LEARN AND EXPLORE DIFFERENT TECH STACKS!",
      fileName: "Frontend",
      skills: [
        "⚡ Developing front-end interfaces for both web and mobile applications.",
        "⚡ Building robust back-end systems to support dynamic applications.",
        "⚡ Integrating third-party services such as Firebase, AWS, and DigitalOcean for enhanced functionality.",
      ],
      softwareSkills: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
        },
        {
          skillName: "react",
          fontAwesomeClassname: "fab fa-react",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
        },
        {
          skillName: "swift",
          fontAwesomeClassname: "fab fa-swift",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
        },
        {
          skillName: "mongodb-database",
          fontAwesomeClassname: "fas fa-database",
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws",
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "fas fa-fire",
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker",
        },
      ],
      display: true, // Set false to hide this section, defaults to true
    },
    // {
    //   title: "App Development",
    //   fileName: "AndroidImg",
    //   skills: [
    //     "⚡ Experience working on Android apps",
    //     "⚡ Knowledge on several SDKs & APIs",
    //     "⚡ Deploying Firebase based apps for secure accessing of information from anywhere",
    //     "⚡ Adapting new Material Design principles for a more refined look",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "Android Studio",
    //       fontAwesomeClassname: "mdi:android-studio",
    //       style: {
    //         color: "#3DDC84",
    //       },
    //     },
    //     {
    //       skillName: "VS",
    //       fontAwesomeClassname: "mdi:microsoft-visual-studio",
    //       style: {
    //         color: "#5C2D91",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "Gradle",
    //       fontAwesomeClassname: "simple-icons:gradle",
    //       style: {
    //         color: "#02303A",
    //       },
    //     },
    //     {
    //       skillName: "Java",
    //       fontAwesomeClassname: "simple-icons:java",
    //       style: {
    //         color: "#007396",
    //       },
    //     },
    //     {
    //       skillName: "ADB",
    //       fontAwesomeClassname: "ic:outline-adb",
    //       style: {
    //         color: "#3DDC84",
    //       },
    //     },
    //     {
    //       skillName: "Eclipse",
    //       fontAwesomeClassname: "simple-icons:eclipseide",
    //       style: {
    //         color: "#2C2255",
    //       },
    //     },
    // ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ReactJs", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "C/C++/C#",
    //   progressPercentage: "70%",
    // },
    // {
    //   Stack: "Java", //Insert stack or technology you have experience in
    //   progressPercentage: "60%", //Insert relative proficiency in percentage
    // },
    {
      Stack: "React Native", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Redux",
      progressPercentage: "80%",
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "80%",
    },
    {
      Stack: "Node Js",
      progressPercentage: "80%",
    },
    {
      Stack: "Express Js",
      progressPercentage: "80%",
    },
    {
      Stack: "MongoDb",
      progressPercentage: "70%",
    },
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS",
      progressPercentage: "80%",
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "80%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Google Colab",
      progressPercentage: "95%",
    },
    {
      Stack: "Code::Blocks",
      progressPercentage: "90%",
    },
    {
      Stack: "Android Studio", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Netbeans",
      progressPercentage: "80%",
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "90%",
    },
    {
      Stack: "Google Docs",
      progressPercentage: "90%",
    },
    {
      Stack: "Bitbucket", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Github",
      progressPercentage: "80%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Centurion University Of Technology And Management",
      subtitle: "B-Tech. in Electronics Communication and Engineering",
      logo_path: "aust_logo.png",
      alt_name: "Deemed University",
      duration: "july 2016 - August 2020",
      cgpa: "7.33 / 10.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, C, Python etc.",
        "⚡ Apart from this, I have done courses on Web Development.",
        "⚡ Placed 4th in my class.",
        "⚡ Dean's List.",
        // "⚡ I was selected for ITEE Training Program which comprised of 20 students in the CSE department.",
        "⚡ Elected as the team leader in all the group projects.",
      ],
      website_link: "https://cutm.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Developer",
      subtitle: "(HTML5;CSS;JavaScript;Bootstrap),",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-960bb0e4-f756-455c-b62c-29e62d214b42/",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Reactjs and Redux",
      subtitle: "React(Basic to Advance)",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-dcf5ef60-0018-4589-b793-76b58f30f2e2/",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    /*
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  */
  ],
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Johnson & Johnson",
      companylogo: require("../src/assests/images/jnj_logo.png"),
      date: "Aug 2024 – Present",
      desc:
        "Develop and maintain scalable web and mobile applications using React.js, Node.js, and MongoDB.Build responsive UIs, implement secure authentication, and integrate APIs and payment gateways.Optimize application performance and ensure cross-platform compatibility.Collaborate with teams to deliver features aligned with business goals and resolve production issues.Manage CI/CD pipeline using Jenkins and Sonar for seamless deployments and code quality analysis, ensuring system reliability.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Developer",
      company: "Dalvkot IT",
      companylogo: require("../src/assests/images/dalvkot_logo.png"),
      date: "Dec 2023 – Aug 2024",
      desc:
        "Led the end-to-end development of a mobile app focused on enhancing patient well-being.Implemented core features, including splash screen, signup, signin, and a user-friendly dashboard.Designed and integrated daily activity tracking with motivational quotes to boost user engagement.Developed self-care modules addressing mindful, spiritual, physical, and emotional health.Introduced weekly mental health assessments to recommend suitable therapists.Enabled appointment scheduling with options for voice calls, video calls, and messaging consultations.Incorporated location-based services to alert users about nearby hospitals for mental health support.Built a dynamic user profile screen with image upload and cropping functionality.Integrated Firebase for push notifications and chatbot capabilities, ensuring real-time communication and a seamless user experience.",
    },
    {
      role: "Software Engineer",
      company: "Relex Healthcare",
      companylogo: require("../src/assests/images/relex_logo.webp"),
      date: "Sep 2021 – Nov 2023",
      desc:
        "Developed and launched a delivery app for patients with features like appointment scheduling, QR code generation, Google Maps location verification, barcode scanning, image uploads, inventory management, and payment processing. Integrated a Hard PrintOut feature using Ezetap SDK and ensured smooth production deployment by resolving bugs and optimizing performance.Spearheaded the development of a supplier order pickup app with barcode and QR code scanning for stock validation and product availability.Enhanced functionality using Native Modules, ensuring seamless user experience and reliable APK releases.",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Project Work and Internship",
  description:
    "A skilled Full Stack Developer with expertise in building responsive web and mobile interfaces, robust back-end systems, and integrating services like Firebase and AWS. Passionate about delivering high-quality products, and exploring new technologies.",
  header_image_path: "experience.svg",
  sections: [
    //   {
    //     title: "Project Work",
    //     experiences: [

    // 	{
    //         title: "Covid-19 Traker",
    //         company: "Own Practice",
    //         // company_url: "https://legatohealthtech.com/",
    //         // logo_path: "legato_logo.png",
    //         duration: "July 2020 - August 2020",
    //         description:
    //           "CovidTracker is an easy to use chrome extension to quickly check the current amount of COVID-19 cases, deaths, recorvery, and the probability of survival in any country/continent.",
    //         color: "#0879bf",
    //       },
    //       {
    //         title: "Weather App",
    //         company: "Own Practice",
    //         duration: "june 2021 - june 2021",
    //         // location: "Pune, Maharashtra",
    //         description:
    //           "In this website we can check weather by searching city name. Tech used HTML CSS JavaScript API and ReactJs.",
    //         color: "#9b1578",
    //       },
    //       {
    //         title: "Todo List",
    //         company: "Self Practice",
    //         duration: "july 2017 - july 2017",
    //         description:
    //           "This is the Todo List website which you can Make list of multiple Items. Tech used in this website HTML CSS JavaScript and ReactJs.",
    //         color: "#fc1f20",
    //       },
    //       {
    //         title: "E-learnigh website",
    //         company: "OnlineShikho.Com",
    //         duration: "jan 2020 - june 2020",
    //         description:
    //           "From OnlineShikho.Com you can learn HTML, CSS, JavaScript, PHP, Python, Bootstrap, Jquery which you can build beautiful website. Here also code editer available for trying to your self.",
    //         color: "#fc1f20",
    //       },

    // ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Udemy",
          logo_path: "michigan_logo.png",
          duration: "May 2020 - july 20120",
          location: "Online",
          company_url:
            "https://www.udemy.com/certificate/UC-960bb0e4-f756-455c-b62c-29e62d214b42/",
          alt_name: "Udemy",
          description:
            "Here I have learned and implement (HTML5;CSS;JavaScript;Bootstrap),",
          color_code: "#2A73CC",
        },
        {
          title: "Reactjs and Redux",
          company: "Udemy",
          logo_path: "michigan_logo.png",
          duration: "August 2019 - September 2020",
          location: "Online",
          company_url:
            "https://www.udemy.com/certificate/UC-dcf5ef60-0018-4589-b793-76b58f30f2e2/",
          alt_name: "Udemy",
          description:
            "Here I have learned and implement ReactJs and Redux basic to Advance.,",
          color_code: "#2A73CC",
        },
        /*
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "(HTML5;CSS;JavaScript;Bootstrap),",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
    */
      ],
    },
    {
      title: "Project Work",
      experiences: [
        {
          title: "Portfolio(Pankaj)",
          company: "My Portfolio",
          company_url: "https://pankajmandal10.github.io/portfoliopankaj/",
          logo_path: "github_logo.jpg",
          duration: "Jan 2021 - july 2020",
          location: "Home Project",
          description:
            " This is my portfolio website which Showcase my work skills and Exprience. To making this website have used Tech HTML CSS JavaScript react and redux.",
          color: "#0C9D58",
        },

        {
          title: "Covid-19 Traker",
          company: "Covid-19 Traker",
          company_url: "https://pankajmandal10.github.io/covidtraker/",
          logo_path: "google_logo.jpg",
          duration: "July 2020 - August 2020",
          location: "Home Project",
          description:
            "CovidTracker is an easy to use chrome extension to quickly check the current amount of COVID-19 cases, deaths, recorvery, and the probability of survival in any country/continent.",
          color: "#4285F4",
        },
        {
          title: "Weather App",
          company: "Weather App",
          company_url: "https://pankajmandal10.github.io/weatherapp/",
          logo_path: "microsoft_logo.jpg",
          duration: "June 2021 - June 2021",
          location: "Home Project",
          description:
            "In this website we can check weather by searching city name. Tech used HTML CSS JavaScript API and ReactJs.",
          color: "#D83B01",
        },
        {
          title: "Todo List",
          company: "Todo List",
          company_url: "https://pankajmandal10.github.io/todolist/",
          logo_path: "mozilla_logo.jpg",
          duration: "July 2021 - July 2021",
          location: "Home Project",
          description:
            "This is the Todo List website which you can Make list of multiple Items. Tech used in this website HTML CSS JavaScript and ReactJs.",
          color: "#000000",
        },
        {
          title: "E-learnigh website",
          company: "OnlineSkikho.Com",
          company_url: "http://onlineshikho.epizy.com/",
          logo_path: "dsc_logo.jpg",
          duration: "Jan 2020 - May 2020",
          location: "Home Project",
          description:
            "From OnlineShikho.Com you can learn HTML, CSS, JavaScript, PHP, Python, Bootstrap, Jquery which you can build beautiful website. Here also code editer available for trying to your self.",
          color: "#0C9D58",
        },

        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "September 2020 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Developed a responsive and feature-rich web and mobile application for task management. The project involved creating an intuitive front-end using React.js and React Native for seamless user experiences across platforms. The back-end was built with Node.js and Express, ensuring scalability and robust API functionality. Integrated Firebase for real-time database updates and authentication, and deployed the application on AWS for reliable and secure hosting. Implemented a Progressive Web App (PWA) version to enhance accessibility for users on different devices.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I’m always on the lookout for exciting job opportunities and challenging projects. Contact me using the form below or through one of the channels listed.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I’m currently available for full-time, contract, or freelance work. Let’s create something amazing together!",
    link: "https://www.linkedin.com/in/pankaj-mandal10/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "560037 Marathahali - Bangalore, Karnataka, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/wh1of8mhLVmw2KMK7",
  },
  phoneSection: {
    title: "Get me",
    subtitle: "+91-8984402264/9148958497",
    email: "pankajmandal10696@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  workExperiences,
  projectsHeader,
  contactPageData,
};
