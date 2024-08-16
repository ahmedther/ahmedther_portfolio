export interface BulletPointsType {
  heading: string;
  content: string;
}

export interface ProjectsTypes {
  title: string;
  description: string;
  keyFeatures?: BulletPointsType[];
  technologiesUsed?: BulletPointsType[];
  url: string;
}
export const projects: ProjectsTypes[] = [
  {
    title: "SERVER-SENT EVENTS (SSE) IMPLEMENTATION (ASK ME AI)",
    description:
      "Developed a real-time communication system using Server-Sent Events (SSE) technology. This project demonstrates the implementation of a one-way server-to-client communication channel, allowing for efficient real-time updates without the overhead of constant polling or the complexity of WebSockets. The system is designed to push updates from the server to connected clients, making it ideal for applications requiring live data feeds or notifications.",
    keyFeatures: [
      {
        heading: "Bilingual Support",
        content: "The application supports both English and Arabic",
      },
      {
        heading: "Push-to-Talk",
        content:
          "Users can interact with the AI using a push-to-talk feature, making the experience more interactive and engaging.",
      },
      {
        heading: "Talk-Back Abilities",
        content:
          "The AI responds to user inputs, providing a conversational learning experience.",
      },
      {
        heading: "Real-Time Processing",
        content:
          "Utilizes Redis for efficient real-time data processing and storage.",
      },
      {
        heading: "Scalable and Reliable",
        content:
          "The backend is built with Express and served on PM2, ensuring scalability and reliability.",
      },
      {
        heading: "Real-Time Updates",
        content:
          "Enables server to push data to clients in real-time without client requests.",
      },
      {
        heading: "Efficient Communication",
        content:
          "Utilizes a single HTTP connection for multiple messages, reducing network overhead.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Programming Language",
        content: "TypeScript",
      },
      {
        heading: "Front-End",
        content:
          "React, styled-components, React Router, Redux, i18next, axios, framer-motion, react-markdown, react-syntax-highlighter, react-speech-recognition",
      },
      {
        heading: "Back-End",
        content:
          "Node.js, Express, ioredis, jsonwebtoken, Webpack (for bundling), PM2 (for serving Express bundle)",
      },
      {
        heading: "Database",
        content: "Redis",
      },
      {
        heading: "SSE Protocol",
        content: "EventSource API (client-side)",
      },
      {
        heading: "Deployment",
        content: "Docker, Kubernetes, Nginx",
      },
    ],
    url: "https://github.com/ahmedther/ask_me_ai",
  },
  {
    title: "PORTFOLIO WEBSITE (This One)",
    description:
      "Developed this personal portfolio website using Next.js, showcasing my projects, skills, and professional experience. The website features a modern, responsive design with smooth animations and interactive elements, demonstrating proficiency in front-end development and UI/UX design principles.",
    keyFeatures: [
      {
        heading: "Responsive Design",
        content:
          "Ensures optimal viewing experience across various devices and screen sizes.",
      },
      {
        heading: "Dynamic Content",
        content:
          "Utilizes Next.js for server-side rendering and optimized performance.",
      },
      {
        heading: "Interactive UI",
        content:
          "Implements smooth animations and transitions using Framer Motion.",
      },
      {
        heading: "Particle Effects",
        content: "Incorporates tsParticles for engaging background animations.",
      },
      {
        heading: "Modern Styling",
        content: "Utilizes Tailwind CSS for efficient and responsive styling.",
      },
    ],
    technologiesUsed: [
      { heading: "Framework", content: "Next.js" },
      { heading: "Programming Language", content: "TypeScript" },
      { heading: "Styling", content: "Tailwind CSS" },
      { heading: "Animations", content: "Framer Motion" },
      { heading: "Particle Effects", content: "tsParticles" },
      { heading: "Deployment", content: "Vercel" },
    ],
    url: "https://github.com/ahmedther/ahmedther_portfolio",
  },
  {
    title: "EMPLOYEE VACCINATION TRACKING APPLICATION",
    description:
      "The Employee Vaccination Tracking Application was designed with cross-platform functionality in mind. It was developed using Dart and Flutter for the front-end interface, which are known for their ability to create high-quality native interfaces on both iOS and Android. This means that the application can be used on both web and Android platforms. It is utilized by HR to monitor and manage employee vaccination records. The Django REST framework was used for the back-end operations, and PostgreSQL for database management. The application was successfully deployed using Docker containers, ensuring efficient and reliable performance.",
    keyFeatures: [
      {
        heading: "Automated Reminder System",
        content:
          "The application sends automated reminders via SMS to employees about upcoming vaccination doses, ensuring timely vaccinations.",
      },
      {
        heading: "Reporting to Department Heads",
        content:
          "The application generates and sends emails to all department heads, providing a list of employees due for vaccination.",
      },
      {
        heading: "Efficient Tracking",
        content:
          "The application allows HR to efficiently track and manage the vaccination records of all employees.",
      },
    ],
    technologiesUsed: [
      { heading: "Front-End", content: "Dart, Flutter" },
      { heading: "Back-End", content: "Python, Django Rest Framework" },
      { heading: "Database", content: "PostgreSQL, Oracle" },
      { heading: "Deployment", content: "Docker, Kubernetes, Nginx" },
    ],
    url: "https://github.com/ahmedther/vacci_track",
  },
  {
    title: "DOCTOR'S PAYOUT",
    description:
      "Developed a comprehensive application used by the finance department to calculate the share of doctors for services rendered within a specific date range.",
    keyFeatures: [
      {
        heading: "Automated Payout Calculation",
        content:
          "Automatically calculates the share of doctors for services rendered within a specific date range.",
      },
      {
        heading: "Data Processing",
        content:
          "Utilizes Pandas and Numpy for efficient data processing and analysis.",
      },
      {
        heading: "Task Queuing",
        content:
          "Implements Celery and RabbitMQ for managing background tasks.",
      },
      {
        heading: "Email Integration",
        content:
          "Sends the finalized Excel file via email to the relevant parties.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Front-End",
        content: "Javascript, Sveltekit",
      },
      {
        heading: "Back-End",
        content: "Python, Django, Django Rest Framework, psycopg2",
      },
      {
        heading: "Database",
        content: "PostgreSQL, Oracle",
      },
      {
        heading: "Data Processing",
        content: "Pandas, Numpy",
      },
      {
        heading: "Operations Task Queue",
        content: "Celery, RabbitMQ",
      },
      {
        heading: "Deployment",
        content: "Docker, Kubernetes, Nginx",
      },
    ],
    url: "https://github.com/ahmedther/doctors_payout",
  },
  {
    title: "RDBMS QUERY REPORTS PORTAL FOR HEALTHCARE SYSTEM",
    description:
      "Developed a web-based query reports portal using Python and Django as the backend framework, and JavaScript, CSS, and HTML for the frontend.",
    keyFeatures: [
      {
        heading: "Role-Based Access Control (RBAC)",
        content:
          "Enhance the existing access control system with more granular permissions.",
      },
      {
        heading: "Audit Logs",
        content:
          "Maintain audit logs to track user activities and report access.",
      },
      {
        heading: "Integration with External Systems",
        content:
          "Integrate with other healthcare systems and databases for seamless data exchange.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Front-End",
        content: "Javascript, HTML, CSS, SCSS/SASS",
      },
      {
        heading: "Back-End",
        content: "Python, Django, Django Rest Framework, psycopg2, pandas",
      },
      {
        heading: "Database",
        content: "PostgreSQL, Oracle",
      },
      {
        heading: "Excel Operations",
        content: "XlsxWriter, pywin32, Xlwings",
      },
      {
        heading: "Deployment",
        content: "Docker, Kubernetes, Nginx, Apache 2",
      },
    ],
    url: "https://github.com/ahmedther/RDBMS_Based_Query_Reports_Portal",
  },

  {
    title: "FEEDBACK PORTAL",
    description:
      "Developed a comprehensive web application designed to collect and analyze feedback from discharged patients of a hospital.",
    keyFeatures: [
      {
        heading: "Automated SMS System",
        content:
          "Implemented a Python script that runs hourly, sending SMS messages to recently discharged patients.",
      },
      {
        heading: "Feedback Web Application",
        content:
          "Created a dynamic, emoji-based UI where patients can provide feedback.",
      },
      {
        heading: "Data Analysis Portal",
        content:
          "Constructed a separate data analysis portal using the Streamlit framework and Python.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Front-End",
        content: "Javascript, HTML, CSS, Streamlit",
      },
      {
        heading: "Back-End",
        content: "Python, Django, psycopg2",
      },
      {
        heading: "Database",
        content: "PostgreSQL, Oracle",
      },
      {
        heading: "Data Processing",
        content: "Pandas, NumPy",
      },
      {
        heading: "Deployment",
        content: "Docker, Kubernetes, Nginx",
      },
    ],
    url: "https://github.com/ahmedther/Feedback_Portal_on_Django_and_Streamlit",
  },
  {
    title: "HELPDESK AND INVENTORY MANAGEMENT SYSTEM (HTMS)",
    description:
      "Developed a web-based Helpdesk and Inventory Management System for a hospital that enables users to log in any calls that come to the helpdesk and assign a technician to the job. The system also allows the caller to track the status of their call log. In addition, authorized users can add or bulk add from Excel any asset to the hospital and update its status and user of the asset. This project demonstrated strong problem-solving, collaboration, and analytical skills, as well as a deep understanding of software development principles and best practices allows for in-depth review of feedback data.",
    keyFeatures: [
      {
        heading: "Call Logging",
        content:
          "Users can log any calls that come to the helpdesk, ensuring all issues are recorded and tracked.",
      },
      {
        heading: "Technician Assignment",
        content:
          "The system allows for the assignment of technicians to specific jobs, ensuring efficient resolution of issues.",
      },
      {
        heading: "Status Tracking",
        content:
          "Callers can track the status of their call log, providing transparency and updates on the progress of their requests.",
      },
      {
        heading: "Asset Management",
        content:
          "Authorized users can add or bulk add assets from Excel to the hospital’s inventory, ensuring accurate and up-to-date records.",
      },
      {
        heading: "Asset Status Updates",
        content:
          "Users can update the status and user of any asset, ensuring the inventory is always current.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Front-End",
        content: "Javascript, HTML, CSS",
      },
      {
        heading: "Back-End",
        content: "Python, Django, Django Rest Framework, psycopg2",
      },
      {
        heading: "Database",
        content: "PostgreSQL, Oracle",
      },
      {
        heading: "Data Processing",
        content: "Pandas, NumPy",
      },
      {
        heading: "Excel Operations",
        content: "Openpyxl",
      },
      {
        heading: "Deployment",
        content: "Docker, Kubernetes, Nginx",
      },
    ],
    url: "https://github.com/ahmedther/HelpDesk_and_Inventory_Management_System",
  },

  {
    title: "AUTOMATED BILL GENERATOR",
    description:
      "This project involved the development of an automated bill generator using Python and Selenium for the billing department. The aim was to automate repetitive daily bills and reduce the workload of the billing team. Ensuring that the automated bill generator was easy to use and maintain.",
    keyFeatures: [
      {
        heading: "Scheduled Billing",
        content:
          "Implement a feature to schedule bills to be generated and sent at specific times.",
      },
    ],
    technologiesUsed: [
      {
        heading: "Front-End",
        content: "Tkinter",
      },
      {
        heading: "Automation Libraries",
        content: "Selenium, pyautogui",
      },
    ],
    url: "https://github.com/ahmedther/Automation_Selenium",
  },
];
