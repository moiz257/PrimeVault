import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Categories";
import { Testimonials } from "./components/Testimonials";
import Newsletter from "./components/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Products/>
      <Categories/>
      <Testimonials/>
    </main>
  );
}
