import Card from "./components/include/Button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      image: "https://picsum.photos/700/700",
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://example.com/project1-demo",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet",
      image: "https://picsum.photos/800/800",
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://example.com/project1-demo",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem eaque, aperiam cupiditate",
      image: "https://picsum.photos/1000/1000",
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://example.com/project1-demo",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      image: "https://picsum.photos/900/900",
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://example.com/project1-demo",
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
