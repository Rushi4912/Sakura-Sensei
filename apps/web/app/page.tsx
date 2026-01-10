
import { Button } from "@/components/ui/button";
import { Navbar} from "@/components/Navbar";
import { Hero} from "@/components/Hero";
  import { Features } from "@/components/Features";
  import {CTA} from "@/components/CTA";
  import {Footer} from"@/components/Footer";
export default function Home(){

  return (

    <div className="w-full h-full">

      <Navbar/>
      <Hero/>
      <Features/>
      <CTA/>
      <Footer/>

    </div>
  )
}