
import { Button } from "@/components/ui/button";
import { Navbar} from "@/components/Navbar";
import { Hero} from "@/components/Hero";
  import {Footer} from"@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home(){

  return (

    <div className="w-full h-full">

      <Navbar/>
      <Hero/>
   
      <Testimonials/>
      <HowItWorks/>
      <Footer/>

    </div>
  )
}