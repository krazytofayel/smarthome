

const Summery_Booking_Section = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-10 mt-10">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">
                Summary and Booking Confirmation
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0  lg:px-6 bg-slate-100 rounded-lg p-2 shadow-lg">
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-[#00ABE4]"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-[#00ABE4]"
                  htmlFor="exampleInput90"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-[#00ABE4]"
                  htmlFor="exampleInput90"
                >
                  Message
                </label>
                <textarea
                  className="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name=""
                  id=""
                ></textarea>
              </div>

              <button
                type="button"
                className="mb-6 inline-block w-full rounded bg-[#00ABE4] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#00ABE4]"
              >
                Send
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 w-full ">
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/2cWvf6T/house6.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    Home Type
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/vVvPsQB/house5.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    Service Type
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/SQfGT3V/house4.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    choose Date
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/gzCQqw8/house3.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    01 Hours
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/2cWvf6T/house6.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
              <div className="p-2  w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                    <img
                      className="w-14 h-14 text-white "
                      src="https://i.ibb.co/j8P04PV/house1.png"
                    />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-500">
                    Service Type
                  </h2>
                  <p className="leading-relaxed">Cottage</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Summery_Booking_Section
