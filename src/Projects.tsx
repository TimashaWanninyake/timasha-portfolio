import { FiGithub } from "react-icons/fi";
import elephantVideo from '../public/JAVA_2.mp4'
import EMSVideo from '../public/EMS.gif'
import weatherImage from '../public/JAVA_1.jpg'
import uniJobsImage from '../public/uniJobs.png'

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  media?: string;
  mediaType: "video" | "image" | "none";
  features: string[];
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Elephant Management System! 🐘✨",
      description: "As part of a six-member team, we designed and developed this system during our second year to streamline the management and monitoring of elephants within a specified environment.",
      tags: ["Java", "Java Swing", "PHP", "MySQL"],
      githubLink: "https://github.com/TimashaWanninyake/Elephant-Management-System",
      media: weatherImage,
      mediaType: "image",
      features: [
        "Current weather conditions",
        "5-day detailed forecast",
        "Location-based detection",
        "Animated weather representations"
      ]
    },
    {
      id: 2,
      title: "Elephant Management System Website 🐘✨",
      description: "A user-friendly website complementing the Elephant Management System, developed by a team of six with focus on accessibility and visual appeal.",
      tags: ["HTML", "CSS", "PHP", "MySQL", "Figma"],
      githubLink: "https://github.com/TimashaWanninyake/Elephant-Management-System-WebSite",
      media: elephantVideo,
      mediaType: "video",
      features: [
        "Intuitive user interface",
        "Secure donation processing",
        "Responsive design"
      ]
    },
    {
      id: 3,
      title: "Uni Jobs ✨",
      description: "Connecting university students with part-time and one-day job opportunities. Designed with students' flexibility and employers' needs in mind, the system offers a seamless user experience backed by robust functionality.",
      tags: ["HTML", "Tailwind CSS", "PHP", "Figma"],
      githubLink: "https://github.com/NavinduNavoda/unijobs",
      media: uniJobsImage,
      mediaType: "image",
      features: [
        "Role-based authentication for students and employers",
        "CV tracking to help students showcase their skills and experience",
        "Advanced filtering and smart suggestions to match students with the right opportunities",
        "Rating and review system for better job quality assurance"
      ]
    },
    {
      id: 4,
      title: "EXAM Management System ✨",
      description: "EMS is a secure, efficient, and streamlined Exam Management System tailored for the Department of Computer Science.It addresses critical inefficiencies in manual exam processes, such as paper setting, moderation, grading, and data security, by introducing a unified digital solution.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL", "AES"],
      githubLink: "https://github.com/uditha2001/EMS",
      media: EMSVideo,
      mediaType: "image",
      features: [
        "Role-based access control for admins, lecturers, and moderators",
        "Automated grading and result generation to reduce errors and delays",
        "Secure workflows with Spring Security and AES encryption for sensitive data",
        "Historical exam data archival for easy access and analysis",
        "Feedback and analytics to continuously improve exam quality"
      ]
    },
  ];

  return (
    <section className="bg-white py-8 px-2 md:px-4 mb-8 lg:mb-20 mt-2 md:mt-2 lg:mt-30 ml-0 lg:ml-[70px] xl:ml-[100px]" id="Projects">
      <div className="ml-2 md:ml-4 lg:ml-20 mr-2 md:mr-4 lg:mr-22">
        <h1 className="font-inter text-lg md:text-2xl lg:text-4xl font-medium text-[#343434] mb-8 px-2 md:px-4">
          Recent Projects
        </h1>

        <div className="space-y-12 lg:space-y-16">
          {projects.slice().reverse().map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Details */}
              <div className="flex-1 px-2 md:px-4 mb-8 lg:mb-34">
                <h2 className="text-base md:text-xl lg:text-2xl font-inter text-[#343434] mb-4">
                  {project.title}
                </h2>
                <p className="text-[#343434] text-xs md:text-sm lg:text-base mt-8 mb-4 opacity-90 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="mb-10 space-y-3 opacity-90">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#ce4646] mr-2 mt-0.5 flex-shrink-0 leading-none">✓</span>
                      <span className="text-[#343434] text-xs md:text-sm lg:text-base -mb-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-[#ce4646] font-medium text-sm lg:text-base font-inter -ml-2 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-medium text-white text-sm lg:text-base rounded-lg bg-gradient-to-r from-[#d60505] to-[#FF6347] ml-1 px-4 py-2 hover:shadow-lg transition-shadow"
                  >
                    <FiGithub className="text-lg" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              
              {/* Media Display */}
              <div className="flex-1 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
                  {project.mediaType === "video" && project.media ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    >
                      <source src={project.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.mediaType === "image" && project.media ? (
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-full object-contain bg-white"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="text-[#343434] text-2xl mb-4">No preview available</div>
                      <div className="text-gray-500">Check out the code on GitHub!</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;