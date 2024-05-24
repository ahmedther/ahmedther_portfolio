export interface ProjectsTypes {
  title: string;
  description: string;
  url: string;
}
export const projects: ProjectsTypes[] = [
  {
    title: "Employee Vaccination Tracking",
    description: `The Employee Vaccination Tracking Application was designed with cross-platform functionality in mind. 
                  It was developed using Dart and Flutter for the front-end interface, which are known for their ability to create high-quality native interfaces on both iOS and Android. 
                  This means that the application can be used on both web and Android platforms. 
                  It is utilized by HR to monitor and manage employee vaccination records. 
                  The Django REST framework was used for the back-end operations, and PostgreSQL for database management. 
                  The application was successfully deployed using Docker containers, ensuring efficient and reliable performance.`,
    url: "https://github.com/ahmedther/vacci_track",
  },
  {
    title: "Doctor's Payout",
    description: `A comprehensive application used by the finance department to calculate the share of doctors for services rendered within a specific date range. 
      The application accepts requests, processes data, and sends the finalized Excel file via email. The system was built using a robust tech stack, 
      including Sveltekit for frontend operations, Django Rest Framework for backend processes, and various libraries for data processing and task queuing. 
      The application has significantly streamlined the payout calculation process, improving efficiency and accuracy.`,
    url: "https://github.com/ahmedther/doctors_payout",
  },
  {
    title: "RDBMS Query Reports Portal For Healthcare System",
    description: `A web-based query reports portal using Python and Django as the backend framework, 
                  and JavaScript, CSS, and HTML for the frontend. The portal displays various reports used by different 
                  departments such as pharmacy, Clinical Admin, Marketing, Discharge Billing, Radiology, etc. 
                  The reports are rights-based, and only users with assigned access rights can view them. 
                  An admin manually assigns the access rights from the admin panel. The portal uses two databases: 
                  Oracle database to retrieve information from the Hospital Information System (EHIS), and PostgreSQL to store user data and website data.`,
    url: "https://github.com/ahmedther/RDBMS_Based_Query_Reports_Portal",
  },
  {
    title: "This One",
    description: `This portfolio website is a comprehensive showcase of my work and projects. Built using the  Next.js framework, TypeScript, and the versatile Tailwind CSS utility library.`,
    url: "https://github.com/ahmedther/ahmedther_portfolio",
  },
  {
    title: "Feedback Portal",
    description: `A comprehensive web application designed to collect and analyze feedback from discharged patients of a hospital. The project is divided into three main components:

1. Automated SMS System: Implemented a Python script that runs hourly, sending SMS messages to recently discharged patients. Each message includes a personalized link to the feedback portal.

2. Feedback Web Application: Created a dynamic, emoji-based UI where patients can provide feedback. The portal includes an admin panel, allowing administrators to create departments and modify questions as needed. Upon submission of feedback, an automated email is dispatched to the relevant departments for review.

3. Data Analysis Portal: Constructed a separate data analysis portal using the Streamlit framework and Python. This portal, accessible only by authorized departments, allows for in-depth review of feedback data.`,
    url: "https://github.com/ahmedther/Feedback_Portal",
  },
  {
    title: "Helpdesk Inventory Management System (HTMS)",
    description: `Helpdesk and Inventory Management System for a hospital that enables users to log in any calls that come to the helpdesk and assign a technician to the job. The system also allows the caller to track the status
    of their call log. In addition, authorized users can add or bulk add from Excel any asset to the hospital and update its status and user of the asset. This project demonstrated strong problem-solving, collaboration, and analytical skills, as well as a deep understanding of software development principles and best practices allows for in-depth review of feedback data.
    `,
    url: "https://github.com/ahmedther/HelpDesk_and_Inventory_Management_System",
  },
  {
    title: "Automated Bill Generator",
    description: `This project involved the development of an automated bill generator using Python and Selenium for the billing department. The aim was to automate repetitive daily bills and reduce the workload of the billing team. Ensuring that the
    automated bill generator was easy to use and maintain.`,
    url: "https://github.com/ahmedther/Automation_Selenium",
  },
];
