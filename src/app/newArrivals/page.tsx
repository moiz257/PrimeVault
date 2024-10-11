"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link
import Formal1 from "@/assests/formal1.jpg";
import Formal2 from "@/assests/Formal1.jpg";
import Formal3 from "@/assests/formal2.jpg";
import Formal4 from "@/assests/Formal3.jpg";
import Gym1 from "@/assests/gym1.jpg";
import Gym2 from "@/assests/gym2.jpg";
import Gym3 from "@/assests/gym3.jpg";
import Gym4 from "@/assests/gym4.jpg";
import Image, { StaticImageData } from "next/image";

// Define the type for products
interface Product {
  name: string;
  image: string | StaticImageData;
  
}

// Define the type for categories
interface Products {
  [category: string]: Product[];
}

const NewArrivals: React.FC = () => {
  const products: Products = {
    formal: [
      { name: "Formal 1", image: Formal1,  },
      { name: "Formal 2", image: Formal2,  },
      { name: "Formal 3", image: Formal3,  },
      { name: "Formal 4", image: Formal4,  },
    ],
    gym: [
      { name: "Gym 1", image: Gym1,  },
      { name: "Gym 2", image: Gym2,  },
      { name: "Gym 3", image: Gym3,  },
      { name: "Gym 4", image: Gym4,  },
    ],
  };

  // Animation variants
  const saleVariants = {
    animate: { x: [0, -100, 0], transition: { duration: 5, repeat: Infinity } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const productVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div className="p-4 md:p-8">
      {/* Heading */}
      <h1 className="text-left text-4xl font-bold mb-8">New Arrivals</h1>

      {/* Product Sections */}
      {Object.keys(products).map((category) => (
        <div key={category} className="mb-12">
          {/* Category Heading with Animation */}
          <motion.h2
            className="text-2xl font-semibold mb-4 capitalize"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
          >
            {category}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products[category].map((product, idx) => (
              <Link  href="/product"> {/* Wrap the entire motion.div with Link */}
                <motion.div
                  className="border p-4 h-90 flex flex-col items-center justify-center text-lg cursor-pointer"
                  variants={productVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx} // Pass the index to control delay
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-70 w-full object-cover mb-2"
                    priority
                    height={700}
                    width={700}
                  />
                  <p>{product.name}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Slider below each category */}
          <div className="overflow-hidden relative h-16 mt-8 bg-black text-white">
            <motion.div
              className="absolute w-full h-full flex items-center justify-center text-xl font-bold"
              variants={saleVariants}
              animate="animate"
            >
              NEW ARRIVALS!
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;
