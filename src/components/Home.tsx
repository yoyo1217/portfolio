import { projects } from "../utils/projects";
import Work from "./Work";

const Home = () => {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="dark:text-slate-200">
        <div className=" md:w-full h-40  flex items-center justify-start">
          <img
            src="/images/avatar.jpeg"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          />
          <div className="text-xl md:text-3xl font-bold pl-6">Yohei</div>
        </div>
        <div className="text-xl md:text-3xl font-bold py-6 dark:text-slate-400 dark:bg-slate-800">
          My Projects
        </div>

        {projects.map((project) => (
          <Work
            key={project.workTitle}
            imageUrl={project.imageUrl}
            imageUrlDark={project.imageUrlDark}
            workTitle={project.workTitle}
            workUrl={project.workUrl}
            workDescription={project.workDescription}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
