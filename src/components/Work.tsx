interface WorkProps {
  src: string;
  workTitle: string;
  workUrl: string;
  workDescription: string;
}

const Work = ({ src, workTitle, workUrl, workDescription }: WorkProps) => {
  return (
    <div>
      {src && (
        <img src={src} alt={workTitle} className="w-12 h-12 md:w-18 md:h-18" />
      )}
      <a href={workUrl} className="hover:underline dark:text-white">
        <h3 className="underline py-3 inline-block hover:font-bold ">
          {workTitle}
        </h3>
      </a>
      <p className="text-slate-500 py-3 dark:text-slate-400">
        {workDescription}
      </p>
    </div>
  );
};
export default Work;
