const Home = () => {
  return (
    <div className="mx-auto md:max-w-3xl ">
      <div className="dark:text-white ">
        <div className="w-full h-40  flex items-center justify-start">
          <img src="/images/avatar.jpeg" className="w-32 h-32 rounded-full" />
          <div className="text-xl md:text-3xl font-bold pl-6 dark:bg-white">
            yoyo1217
          </div>
        </div>
        <div className="text-xl md:text-3xl font-bold py-3 dark:text-white dark:bg-black">
          My Work
          <div>
            <a
              href="https://chromewebstore.google.com/detail/focus-bite/bbofenleefnnokngmachgjhhkchffabo"
              className=" hover:underline dark:text-white"
            >
              Focus Bite
            </a>
          </div>
          <div>
            <a
              href="https://algo-gallery.vercel.app/"
              className=" hover:underline dark:text-white"
            >
              Algo Gallery
            </a>
          </div>
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
    </div>
  );
};
export default Home;
