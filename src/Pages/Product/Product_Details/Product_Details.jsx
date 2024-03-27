import { useState } from "react";
import Secondary_Title_Section from "../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Product_Category from "../Product_Components/Product_Category/Product_Category";
import Price_Range_Selector from "../Product_Components/Price_Range_Selector/Price_Range_Selector";
import Slider from "../Product_Components/Slider/Slider";
import Product_List from "../Product_Components/Product_List/Product_List";


const Product_Details = () => {
  const priceRanges = [
    { label: "$0 - $50", min: 0, max: 50, index: 1 },
    { label: "$51 - $100", min: 51, max: 100, index: 2 },
    { label: "$200 - $700", min: 200, max: 700, index: 2 },
    { label: "$700 - $1500", min: 700, max: 1500, index: 2 },
    // Add more price ranges as needed
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sample products data
  const products = [
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-1.png",

      price: 300,
      discount: 70,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T04:30:00",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-2.png",

      price: 900,
      discount: 20,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-3.png",

      price: 1300,
      discount: 55,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-4.png",

      price: 200,
      discount: 50,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T09:30:00",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-5.png",

      price: 900,
      // discount: 35,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T01:30:00",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-6.png",

      price: 100,
      // discount: 10,
      category: "Photos",
      title: "Best View in New York City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T20:30:00",
    },
    // Add more products as needed
  ];

  const slides = [
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Smart Air Purifier",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonText: "Shop now",
    },
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Another Heading",
      description: "Another description goes here.",
      buttonText: "Shop now",
    },
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Yet Another Heading",
      description: "Yet another description goes here.",
      buttonText: "Shop now",
    },
  ];

  // const [slides, setSlides] = useState([]);

  // useEffect(() => {
  // Fetch data from the API
  // const fetchData = async () => {
  // try {
  //  const response = await fetch("your_api_endpoint");
  //  if (!response.ok) {
  //    throw new Error("Failed to fetch data");
  //  }
  //      const data = await response.json();
  //      setSlides(data.slides);
  //    } catch (error) {
  //      console.error("Error fetching data:", error);
  //    }
  //  };

  //    fetchData();
  //  }, []);
  return (
    <>
      <section>
        <div>
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <div>
                <div className=" border-blue-400 border-l-8">
                  <Secondary_Title_Section
                    secondary_title={"Product Category"}
                  />
                </div>
                <div>
                  <Product_Category />
                </div>
                <div className="mt-5">
                  <div className=" border-blue-400 border-l-8">
                    <Secondary_Title_Section
                      secondary_title={"Product Price"}
                    />
                  </div>
                  <div>
                    <Price_Range_Selector
                      ranges={priceRanges}
                      products={products}
                      setFilteredProducts={setFilteredProducts}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div>
                <Slider slides={slides} />
              </div>

              <div className="mt-10">
                <Product_List
                  products={
                    filteredProducts.length > 0 ? filteredProducts : products
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Details;
