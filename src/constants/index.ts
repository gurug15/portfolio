import terraProject from "../assets/projects/terra.jpeg"
import kubeProject from "../assets/projects/kubernetes.jpeg"
import medProject from "../assets/projects/med.jpeg"
import medDevops from "../assets/projects/med-devops.png"
import trendsProject from "../assets/projects/treds.jpeg"
import awscert from "../assets/certificates/aws.png";
import devopscert from "../assets/certificates/devops.png"
import merncert from "../assets/certificates/mern.png"

export const HERO_CONTENT = `I am a passionate Software Developer with a knack for crafting robust and scalable applications. With almost a year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, back-end technologies like Node.js, Prisma, PostgreSQL, and many DevOps tools. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With about a year of experience, I have worked with technologies like React, Next.js, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I also have experience in DevOps practices, including containerization with Docker, orchestration with Kubernetes, and deployment on AWS, enabling me to ensure seamless deployment and operation in cloud environments. I thrive in collaborative environments, enjoy solving complex problems, and delivering high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;



export const CERTIFICATES = [
  {
    year: "Jan 2024",
    image: awscert,
    role: "AWS Certified Solutions Architect – Associate (SSA-C03)",
    company : "AWS",
    description: `Obtained the AWS Solutions Architect Associate certification, demonstrating proficiency in designing and deploying scalable systems on AWS.`,
    technologies: ["AWS","S3","EC2","IAM","VPC","RDS","Route53","SNS","Etc.."],
    link: "https://www.credly.com/badges/94cdd2fc-156c-41d2-9795-aadc8468ce8c/linked_in_profile"
  },
  {
    year: "Jul 2024",
    image: merncert,
    role: "0-100 Full Stack Web Development Course",
    company: "100xDevs",
    description: `Gaining expertise in front-end and back-end technologies. Demonstrated proficiency in MERN stack and Next.js, and server-side programming.`,
    technologies: ["React", "Nodejs", "Express", "MongoDB", "Next.Js", "PostgreSQL"],
    link: "https://www.linkedin.com/posts/guru-gastgar-67a125217_achievementunlocked-100xdevs-activity-7203102826871402496-Yi4Y?utm_source=share&utm_medium=member_desktop"
  },
  {
    year: "May 2024",
    image: devopscert,
    role: "DevOps Tools",
    company: "Ethan's Tech",
    description: `Completed a course on DevOps tools, focusing on continuous integration, continuous delivery, and infrastructure as code using tools like Jenkins, Docker, and Terraform.`,
    technologies: ["Jenkins", "Docker", "Terraform","Ansible","Kubernetes","Maven","Nexus"],
    link: "https://www.linkedin.com/posts/guru-gastgar-67a125217_devops-certification-softwareengineering-activity-7196983430524358657-4X_3?utm_source=share&utm_medium=member_desktop"
  },
];

export const PROJECTS = [
  {
    title: "Automated CI/CD Pipeline for Cloud Infrastructure",
    image: terraProject,
    description:
      "Developed a CI/CD pipeline using Jenkins, Maven, Docker, SonarQube, and Terraform. Ensured seamless software delivery from code to cloud infrastructure. Integrated SonarQube for code quality analysis, enhancing reliability. Leveraged Terraform for automated infrastructure provisioning, optimizing resource management. Demonstrated proficiency in modern DevOps practices and tools.",
    technologies: ["Jenkins", "Maven", "Docker", "SonarQube", "Terraform"],
    link: "https://github.com/gurug15/devops-terraform-ansible-pipeline.git"
  },
  {
    title: "Medium Blog App Clone",
    image: medProject, // Replace with actual image path
    description:
      "Developed a responsive UI using React and TypeScript. Built a serverless backend with Cloudflare Workers and Hono. Designed and managed the PostgreSQL database with Prisma ORM. Enhanced database performance with Prisma Accelerate. Implemented secure authentication and authorization using JWT.",
    technologies: ["React", "TypeScript", "Cloudflare Workers", "Hono", "PostgreSQL", "Prisma", "Prisma Accelerate"],
    link:"https://github.com/gurug15/medium-project.git"
  },
  {
    title: "Threads App Clone",
    image: trendsProject, // Replace with actual image path
    description:
      "Developed a full-stack web application using Next.js. Integrated user authentication with NextAuth.js. Employed PostgreSQL and Prisma for database management. Utilized Shardcn for building custom UI elements. Styled the user interface with Tailwind CSS.",
    technologies: ["Next.js", "NextAuth.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    link: "https://github.com/gurug15/Threads.git"
  },
  {
    title: "Automated Blog App Deployment",
    image: medDevops, // Replace with actual image path
    description:
      "Automated deployment of a blog app using Jenkins, Ansible, Docker, and Cloudflare Workers. Configured Jenkins CI/CD pipeline for continuous integration and deployment. Developed Ansible playbooks for server provisioning and configuration. Containerized the frontend and integrated a serverless backend with Cloudflare Workers.",
    technologies: ["Jenkins", "Ansible", "Docker", "Cloudflare Workers"],
    link: "https://github.com/gurug15/medium-project.git"
  },
  {
    title: "DevOps Project: Register App",
    image: kubeProject, // Replace with actual image path
    description:
      "Implemented Jenkins Pipeline for CI/CD of a Java application. Managed source code and versioning with GitHub. Deployed and managed Kubernetes setup using EKS and ArgoCD. Utilized Docker for containerization and Maven for building the app.",
    technologies: ["Jenkins", "GitHub", "EKS", "ArgoCD", "Docker", "Maven", "SonarQube"],
    link: "https://github.com/gurug15/register-app.git"
  },
];

export const CONTACT = {
  address: " Pune, Maharashtra, India ",
  phoneNo: " 9011333534 ",
  email: "gurug15@gmail.com",
};
