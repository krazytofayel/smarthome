import { useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Checkout_Section = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <section>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out${navfix ? "shadow-lg bg-white" : ""
            }`}
        >
          <NavBar />
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 mt-[90px] ">
          <div className="w-full  grid grid-cols-12 gap-5 container mx-auto lg:gap-12 p-2 ">
            <div className="bg-white col-span-12 lg:col-span-7 mb-6 lg:mb-0 dark:bg-gray-800  rounded-lg shadow-md border dark:border-gray-700">
              <h1 className="text-2xl font-bold bg-blue-500 text-white p-2 dark:text-white mb-4">
                Personal Billing Confirmation
              </h1>
              <div className="mb-6 p-8">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      for="first_name"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-white mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    for="address"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="city"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      for="state"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      for="zip"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                  Payment Information
                </h2>
                <div className="mt-4">
                  <label
                    for="card_number"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card_number"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      for="exp_date"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="exp_date"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      for="cvv"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex justify-end p-8">
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">
                  Place Order
                </button>
              </div>
            </div>
            <div className="bg-white col-span-12 lg:col-span-4 mb-6 lg:mb-0 dark:bg-gray-800  rounded-lg shadow-md border dark:border-gray-700 h-[500px]">
              <h1 className="text-2xl font-bold bg-blue-500 text-white p-2 dark:text-white mb-4">
                Personal Billing Confirmation
              </h1>

              <div className="p-8">
                <div className="flex flex-col justify-center items-center ">
                  <div>

                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <img src="https://via.placeholder.com/80" alt="Product Image" className="mr-4" />
                        <div>
                          <h2 className="font-bold">Product Name</h2>
                          <p className="text-gray-700">Product Description</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                        <div className="mx-4">
                          <input type="number" value="1" className="w-16 text-center" />
                        </div>
                        <span className="font-bold">$19.99</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Subtotal:</span>
                      <span className="font-bold">$19.99</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span>Taxes:</span>
                      <span>$1.00</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">$20.99</span>
                    </div>
                    <div className="flex justify-center mt-6">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Checkout_Section
