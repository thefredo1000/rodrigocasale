import ExperienceCard from "./experience-card";
import "./style.css";
type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};
const Experience = () => {
  const experiences: Array<Experience> = [
    {
      title: "Fullstack Software Engineer",
      company: "Pinterest",
      location: "Remote | Mexico",
      startDate: "Jan 2024",
      endDate: "Present",
      description:
        "Working on systems for the internal ads review process in Pinterest, mainly directed to the processing, conversion and redirection of data.",
    },
    {
      title: "Project Lead / Software Engineer",
      company: "Abdo Technology",
      location: "Monterrey, Mexico",
      startDate: "Sept 2023",
      endDate: "Jan 2024",
      description:
        "Frontend development for several React and Flutter projects",
    },
    {
      title: "Frontend Developer",
      company: "Reveel",
      location: "Remote | Mexico",
      startDate: "Oct 2023",
      endDate: "Jan 2024",
      description: "Built critical features for a Web3 wallet web app.",
    },
    {
      title: "Frontend Developer",
      company: "Gnosis Ltd.",
      location: "Remote | Mexico",
      startDate: "June 2022",
      endDate: "Nov 2022",
      description: "Built critical features for a Web3 wallet web app.",
    },
    {
      title: "Software Engineer Intern",
      company: "Google",
      location: "Remote | Mexico",
      startDate: "June 2021",
      endDate: "Aug 2021",
      description:
        "Developed a C++ server that converts an internal data format into an open-source data model for data export to clients.",
    },
    {
      title: "Student Training in Engineering Program Intern",
      company: "Google",
      location: "Remote | Mexico",
      startDate: "June 2020",
      endDate: "Aug 2020",
      description:
        "Collaborated in a team to develop an open-source web app for online gaming in remote classes, promoting technology use in education.",
    },
  ];

  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {experiences.map((experience, i) => (
          <ExperienceCard experience={experience} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
