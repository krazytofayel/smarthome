import grid1 from "../../../../../public/images/Home_Page_Images/home_grid-img1.png";
import grid2 from "../../../../../public/images/Home_Page_Images/home_grid-img2.png";
import grid3 from "../../../../../public/images/Home_Page_Images/home_grid-img3.png";
import Statistics from "../Statistics/Statistics";

const Home_Main_Section = () => {
  return (
    <>
      <section className="overflow-hidden bg-white py-8 sm:py-16 mt-5">
        {/* gradient effect start */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-32 h-max w-full m-auto grid grid-cols-2 gap-20 md:gap-60 opacity-40"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary-500 to-purple-400"></div>
          <div className="blur-[106px] h-56 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        {/* gradient effect end */}
        <div className="mx-auto container ">
          <div className=" grid  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 first-line:">
            <div className="lg:pr-8 ">
              <section className="w-full  ">
                <div className=" mx-auto py-5 px-4 ">
                  <div>
                    <p className="mt-14 2xl:[95px] xl:text-[65px] lg:text-[50px] md:text-[50px] text-[30px]  font-extrabold text-gray-900 sm:tracking-tight">
                      <span className="relative inline-block">
                        <svg
                          className="stroke-current bottom-0 absolute text-[#00ABE4] -translate-x-2"
                          viewBox="0 0 410 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                            strokeWidth="12"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                        <span className="relative mr-4">Modernize </span>
                      </span>
                      your home with smart automation systems.
                    </p>
                    <p className=" mt-5 lg:text-3xl text-xl text-gray-600  mb-10">
                      Let's create a future where automation, comfort, security,
                      and hope thrive together. Welcome to Smart Home People.
                    </p>
                    <div className="border-2 border-dashed p-2 rounded">
                      <Statistics />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full ">
              <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center p-2 md:p-0">
                <div className="col-span-2 sm:col-span-1 md:col-span-1 h-[42.5rem]">
                  <a
                    href="#"
                    className="group relative flex flex-col overflow-hidden rounded-[30px] px-4 pb-4 pt-40 mb-4 h-[24rem]"
                  >
                    <img
                      src={grid2}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </a>

                  <a
                    href="#"
                    className="group relative flex flex-col overflow-hidden rounded-[30px] px-4 pb-4 pt-40 h-[17.5rem]"
                  >
                    <img
                      src={grid1}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </a>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50  md:h-full flex flex-col h-[50rem]">
                  <a
                    href="#"
                    className="group relative flex flex-col overflow-hidden rounded-[30px] px-4 pb-4 pt-40 flex-grow"
                  >
                    <img
                      src={grid3}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_Main_Section;
