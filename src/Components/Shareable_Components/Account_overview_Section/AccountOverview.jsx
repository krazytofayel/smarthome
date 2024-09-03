import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiCopySimple } from "react-icons/pi";


const AccountOverview = () => {
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

                <div className="relative overflow-x-auto  sm:mt-10 lg:mt-40 mb-20">
                <h1 className="text-[#00abe4] text-2xl font-medium px-44 mb-5">Account Overview </h1>
                <div className="container mx-auto flex justify-between underline mb-2">
                    <p>upcoming order</p>
                    <p>track an order</p>
                </div>
                    <table className="container mx-auto   w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#00ABE4] dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-white">
                                <th scope="col" className="px-6 py-3">
                                    OrderNo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Items
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tracking Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delivery Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    2231
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <img src="https://flowbite.com/docs/images/products/apple-watch.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                        </div>
                                        <div>
                                            Apple Watch
                                        </div>

                                    </div>
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <button className="flex items-center justify-center align-baseline gap-1 p-2 me-3 text-sm font-medium  text-black  border-0 border-gray-300 rounded focus:outline-none " type="button">
                                        <span className="underline"> 23232323232</span>
                                        <PiCopySimple className="hover:scale-50" />
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    <span className="text-center ">27-5-24</span>
                                    <p>(expected)</p>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">$348</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    22334
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <img src="https://flowbite.com/docs/images/products/imac.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                        </div>
                                        <div>
                                            Imac
                                        </div>

                                    </div>
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <button className="flex items-center justify-center align-baseline gap-1 p-2 me-3 text-sm font-medium  text-black  border-0 border-gray-300 rounded focus:outline-none " type="button">
                                        <span className="underline"> 23232323232</span>
                                        <PiCopySimple className="hover:scale-50" />
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    <span className="text-center ">27-5-24</span>
                                    <p>(expected)</p>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">$458</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    2231
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <img src="https://flowbite.com/docs/images/products/apple-watch.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                        </div>
                                        <div>
                                            Apple Watch
                                        </div>

                                    </div>
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white ">
                                    <button className="flex items-center justify-center align-baseline gap-1 p-2 me-3 text-sm font-medium  text-black  border-0 border-gray-300 rounded focus:outline-none " type="button">
                                        <span className="underline"> 23232323232</span>
                                        <PiCopySimple className="hover:scale-50" />
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    <span className="text-center ">27-5-24</span>
                                    <p>(expected)</p>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">$348</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container mx-auto flex justify-between underline mb-2">
                    <p>billing method</p>
                    <p>view all payments and billing methods</p>
                </div>
               
                

                <div className="">
                    <Footer />
                </div>
            </section>

        </>
    )
}

export default AccountOverview
