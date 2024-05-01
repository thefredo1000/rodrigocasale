const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}) => {
  return (
    <div
      style={{
        border: "1px solid #7dbaa2",
        padding: "1rem",
        backgroundColor: "#fcf9f9",
      }}
    >
      <h3>{experience.title}</h3>
      <p>{experience.company}</p>
      <p>
        {experience.location} | {experience.startDate} - {experience.endDate}
      </p>

      <p>{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
