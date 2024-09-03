import {  useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../../../public/images/Nav_Images/nav-logo.png";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import QuantityCounter from "../QuantityCounter _Section/QuantityCounter";
import Global_Button_Section from "../Global_Buton_Section/Global_Button_Section";
const NavBar = ({
  cartCount,
  clickedProducts,
  removeItemFromCart,
 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Service", link: "/service" },
    { name: "Contact US", link: "/contact_us" },
    { name: "Product", link: "/product" },
  ];
  console.log("pass to navbar", clickedProducts);
  let [open, setOpen] = useState(false);
  // Define state for total price
  const [totalPrice, setTotalPrice] = useState("");

  const handleQuantityChange = (newQuantity, productId) => {
    // Find the index of the product in the clickedProducts array
    const productIndex = clickedProducts.findIndex(
      (product) => product.id === productId
    );
    if (productIndex !== -1) {
      // Update the quantity for the specific product
      const updatedProducts = [...clickedProducts];
      updatedProducts[productIndex].quantity = newQuantity;
      // Calculate the total price for the specific product
      updatedProducts[productIndex].totalPrice =
        newQuantity * updatedProducts[productIndex].price;

      setTotalPrice(updatedProducts[productIndex].totalPrice);
    }
  };
  console.log("***updated price", totalPrice);
  console.log(clickedProducts ?? []);
  //Modify receve arry to convert object.because i want to use map
  const clickedProductArray = clickedProducts
    ? Object.values(clickedProducts)
    : [];

  console.log("array of clicked item cart", clickedProductArray ?? []);
  const totalAmount = clickedProductArray.reduce(
    (accumulator, product) => accumulator + (product.totalPrice || 0),
    0
  );
  return (
    <>
      <div>
        <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] p-5 lg:py-5 px-0">
          <div className="p-2 md:p-0 lg:p-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
              }}
            >
              {" "}
              <a href="/">
                {" "}
                <img
                  src={navlogo}
                  alt=" main logo"
                  className="w-[5rem]  drop-shadow-xl"
                />{" "}
              </a>
              {/* <h1>Smart home people</h1> */}
            </motion.div>
          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? "x" : "..."}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-gray-600 bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 gap-5 transition-all duration-500 ease-in-out ${
              open ? "right-19" : "hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-.5 bg-[#00ABE4] border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100 hover:text-[#00ABE4]"></span>
                <Link
                  to={link.link}
                  className="duration-500 font-bold hover:text-[#00ABE4] text-gray-600"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="md:hidden my-3 truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="booking">Booking Now</Link>
            </motion.li>
            <motion.li
              className="md:hidden truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="signup">Create An Account</Link>
            </motion.li>
          </motion.ul>

          <div
            className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${
              open ? "right-19" : "hidden"
            }`}
          >
            <button className=" text-[#00ABE4] md:text-[11px] lg:text-[18px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/booking">Booking</Link>
            </button>
            {/* bg-transparent hover:bg-[#00ABE4] text-[#00ABE4] font-semibold hover:text-white py-2 px-4 border border-[#00ABE4] hover:border-transparent rounded */}
            <button className="bg-transparent hover:bg-[#00ABE4] text-[#00ABE4]  hover:text-white  border border-[#00ABE4] hover:border-transparent rounded-lg md:text-[11px] lg:text-[18px] px-3 pb-2 pt-1   font-semibold lg:font-medium truncate">
              <Link to="/">Sign up</Link>
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer visibility
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#00ABE4] rounded-lg hover:bg-[#35768b] focus:ring-4 focus:outline-none focus:ring-[#9de0f7] dark:bg-[#00ABE4] dark:hover:bg-[#3f6875] dark:focus:ring-[#00ABE4]"
            >
              <FaShoppingBag />
              {cartCount > 0 && ( // Only show the count if cartCount is greater than 0
                <div className=" py-2 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">
                  {cartCount}
                </div>
              )}
            </button>

            <div
              className={`${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              } fixed top-0 right-0 z-40 h-screen w-[30%] p-4 overflow-y-auto transition-transform bg-white  dark:bg-gray-200`}
            >
              {/* Drawer content */}
              <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                Right drawer
              </h5>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)} // Close drawer
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              {/* Conditional rendering based on cartCount */}
              {cartCount === 0 ? (
                <p className="mt-4 text-sm text-gray-500">
                  Add product to the cart
                </p>
              ) : (
                <div className="flex flex-col py-8 md:py-10 lg:py-8 border-t border-gray-50">
                  {clickedProductArray.map((product, index) => (
                    <div key={index} className="flex  w-full">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-28 w-28 object-center object-cover md:block hidden"
                      />
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="md:hidden h-28 w-28 object-center object-cover"
                      />
                      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                          {product.id}
                        </p>
                        <div className="flex items-center justify-between w-full">
                          <p className="text-base font-black leading-none text-gray-800">
                            {product.name}
                          </p>
                          <QuantityCounter
                            initialValue={product.quantity}
                            onQuantityChange={(newQuantity) =>
                              handleQuantityChange(newQuantity, product.id)
                            }
                          />
                        </div>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          Height: 10 inches
                        </p>
                        <p className="text-xs leading-3 text-gray-600 py-4">
                          Color: Black
                        </p>
                        <p className="w-96 text-xs leading-3 text-gray-600">
                          Composition: 100% calf leather
                        </p>
                        <div className="flex items-center justify-between pt-5">
                          <div className="flex items-center">
                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                              Add to favorites
                            </p>
                            <p
                              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                              onClick={() => removeItemFromCart(product.id)}
                            >
                              Remove
                            </p>
                          </div>
                          <p className="text-base font-black leading-none text-gray-800">
                            {/* {totalPrice ? totalPrice : product.price} */}
                            {product.totalPrice
                              ? `$${product.totalPrice.toFixed(2)}`
                              : `$${product.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="text-lg leading-3 underline text-red-500 pl-5 mt-20 cursor-pointer">
                    total: ${totalAmount.toFixed(2)}
                  </p>
                  <div className="flex gap-2">
                  <Link to={"/checkout"} className="py-3 text-lg">
                    {" "}
                    <Global_Button_Section
                      button_text={"checkout"}
                      className="text-xl"
                    />
                  </Link>
                  <Link to={"/orderlist"} className="py-3 text-lg">
                    {" "}
                    <Global_Button_Section
                      button_text={"orderlist"}
                      className="text-xl"
                    />
                  </Link>
                  <Link to={"/accountoverview"} className="py-3 text-lg">
                    {" "}
                    <Global_Button_Section
                      button_text={"Account"}
                      className="text-xl"
                    />
                  </Link>

                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div></div>
    </>
  );
};

export default NavBar;
