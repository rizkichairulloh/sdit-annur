import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Facilities } from "@/components/sections/Facilities";
import { SPMBInfo } from "@/components/sections/SPMBInfo";
import { Requirements } from "@/components/sections/Requirements";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <SPMBInfo />
      <Requirements />
      <Contact />
    </>
  );
}
