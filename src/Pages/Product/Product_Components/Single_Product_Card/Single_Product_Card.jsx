import "./style.css";

const Single_Product_Card = ({ product }) => {
  // Calculate discounted price
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  // Calculate time difference in hours
  const currentTime = new Date();
  const productTime = new Date(product.timestamp);
  const timeDifferenceMs = currentTime - productTime;
  const timeDifferenceHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));

  // Check if discount is 50% or higher
  const isHighDiscount = product.discount >= 50;

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <a href="#">
          <div className="relative">
            <img className="w-full" src={product.imageUrl} alt="Product" />
            <div className="hover:bg-transparent rounded-2xl transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            {product.discount && (
              <span
                className={`discount-tag rounded-lg right-0 top-0 mr-2 mt-2 px-2 py-1 bg-red-500 text-white absolute ${
                  isHighDiscount
                    ? "transition transform duration-700 animate-pulse font-bold bg-gradient-to-r from-red-500 to-pink-500"
                    : "bg-red-500"
                }`}
              >
                {product.discount}% OFF
              </span>
            )}
          </div>
        </a>
        <div className="px-6">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {product.title}
          </a>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
        <div className="px-6 py-2 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <svg
              height="13px"
              width="13px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                                    c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                                    c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="ml-1">{timeDifferenceHours} hours ago</span>
            {product.discount ? (
              <>
                <del className="ml-1">${product.price}</del>
                <span className="ml-1">${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="ml-1">${product.price}</span>
            )}
          </span>
          <span className="addtocart border-2 rounded-full h-5 w-5 p-2 flex justify-center items-center font-bold">
            +
          </span>
        </div>
      </div>
    </>
  );
};

export default Single_Product_Card;
