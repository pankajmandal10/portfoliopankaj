/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Pankaj Mandal",
  logo_name: "Pankaj Mandal",
  nickname: "Mandal",
  subTitle:
    "An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.",
  resumeLink:
    "https://drive.google.com/file/d/1wE6h9GTCXyjjDH51zMpBL0P_l7n_4H1a/view?usp=sharing",
  portfolio_repository: "https://github.com/pankajmandal10",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/pankajmandal10",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pankaj-mandal10/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link:
  //     "https://www.youtube.com/channel/UClvrUclYSGX_MZPOF6ySG6A?view_as=subscriber",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link:
      "http://onlineshikho.epizy.com/",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/14167873/jongi95",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#FE7A16", // Reference https://simpleicons.org/?q=twitter
  },
  */
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009425005374",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Telegram",
  //   link: "https://www.instagram.com/mm_tasin/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

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
      title: "Front-End Development",
      fileName: "Frontend",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing highly scalable production ready models",
        "⚡ Creating responsive application",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Angular",
        //   fontAwesomeClassname: "simple-icons:angular",
        //   style: {
        //     color: "#DD0031",
        //   },
        // },
        // {
        //   skillName: ".Net Core",
        //   fontAwesomeClassname: "mdi:dot-net",
        //   style: {
        //     color: "#5C2D91",
        //   },
        // },
      ],
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
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Developer/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%",
    // },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ReactJs", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
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
      progressPercentage: "50%", //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "65%",
    },
    // {
    //   Stack: "Angular",
    //   progressPercentage: "70%",
    // },
    {
      Stack: "Python",
      progressPercentage: "50%",
    },
    // {
    //   Stack: "SQL/PLSQL",
    //   progressPercentage: "80%",
    // },
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
    // {
    //   Stack: "PHP",
    //   progressPercentage: "70%",
    // },
    // {
    //   Stack: ".Net Core",
    //   progressPercentage: "65%",
    // },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
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
    // {
    //   Stack: "Oracle Database", //Insert stack or technology you have experience in
    //   progressPercentage: "70%", //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "MS SQL Server", //Insert stack or technology you have experience in
    //   progressPercentage: "90%", //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "Firebase", //Insert stack or technology you have experience in
    //   progressPercentage: "60%", //Insert relative proficiency in percentage
    // },
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

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Project Work and Internship",
  description:
    "I am a fresh graduate with experience gained from project works on sites like W3School and Covid-19 Tracker.",
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
          company_url:
            "https://pankajmandal10.github.io/portfoliopankaj/",
          logo_path: "github_logo.jpg",
          duration: "Jan 2021 - july 2020",
          location: "Home Project",
          description:
            "This is my portfolio website which Showcase my work skills and Exprience. To making this website have used Tech HTML CSS JavaScript react and redux.",
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
          company_url:
            "http://onlineshikho.epizy.com/",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects. Most of these are academic projects with some personal projects in between.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, React, JavaScript and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
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
    subtitle: "+91-8984402264",
    email: "mandalpankaj10696@gmail.com",
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
  projectsHeader,
  contactPageData,
};
