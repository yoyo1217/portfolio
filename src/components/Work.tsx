interface WorkProps {
  imageUrl?: string;
  imageUrlDark?: string;
  workTitle: string;
  workUrl: string;
  workDescription?: string;
}

const Work = ({
  imageUrl,
  imageUrlDark,
  workTitle,
  workUrl,
  workDescription,
}: WorkProps) => {
  return (
    <div className="pt-4">
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt={workTitle}
            className="w-12 h-12 md:w-18 md:h-18 block dark:hidden"
          />
          <img
            src={imageUrlDark}
            alt={workTitle}
            className="w-12 h-12 md:w-18 md:h-18 hidden dark:block"
          />
        </div>
      )}
      <a href={workUrl} className="hover:underline dark:text-white">
        <h3 className="underline py-1 inline-block hover:font-bold ">
          {workTitle}
        </h3>
      </a>
      {workDescription && (
        <p className="text-slate-700 py-1 dark:text-slate-400">
          {workDescription}
        </p>
      )}
    </div>
  );
};
export default Work;
