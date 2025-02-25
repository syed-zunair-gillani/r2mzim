import Main from "@/components/home/Main";
import Features from "@/components/home/Features"
import Number from "@/components/home/Number";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Brands from "@/components/home/brands";

export default function Home() {
  return (
   <>
   <Navbar/>
    <Main/>
    <Features/>
    <Brands/>
    <Number/>
    <Footer/>
   
   </>
  );
}
