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
          <div className="text-xl md:text-3xl font-bold pl-6">yoyo1217</div>
        </div>
        <div className="text-xl md:text-3xl font-bold py-6 dark:text-slate-400 dark:bg-slate-800">
          My Project
        </div>

        {/* <div>
          <img
            src="/images/focusbiteicon.png"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <a
            href="https://chromewebstore.google.com/detail/focus-bite/bbofenleefnnokngmachgjhhkchffabo"
            className=" hover:underline dark:text-white"
          >
            <h3 className="underline py-3 inline-block hover:font-bold">
              Focus Bite
            </h3>
          </a>
          <p className="text-slate-500 py-3">
            Simple pomodoro timer chrome extension. Boost your productivity with
            the Pomodoro timer extension for your browser.
          </p>
        </div> */}

        <Work
          src={"/images/focusbiteicon.png"}
          workTitle="Focus Bite"
          workUrl="https://chromewebstore.google.com/detail/focus-bite/bbofenleefnnokngmachgjhhkchffabo"
          workDescription="Simple pomodoro timer chrome extension. Boost your productivity with
            the Pomodoro timer extension for your browser."
        />

        <Work
          src={""}
          workTitle="Algo Gallery"
          workUrl="https://algo-gallery.vercel.app"
          workDescription="A gallery of algorithm visualizations."
        />

        <div>
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-031-31164-2_23"
            className=" hover:underline dark:text-white"
          >
            Understanding Social Media Engagement in Response to Disaster
            Fundraising Attempts During Australian Bushfires
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
