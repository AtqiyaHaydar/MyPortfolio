"use client"

import About from "@/components/About";
import DesignTools from "@/components/DesignTools";
import Experiences from "@/components/Experiences";
import TechStacks from "@/components/TechStacks";
import Image from "next/image";
import useAos from "@/components/useAos";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import WebsiteProjects from "@/components/WebsiteProjects";

export default function Home() {
  useAos();
  
  return (
    <main className="my-4 w-full md:w-[750px] transition-all px-8 md:px-0">
      <About />

      <Tabs className="md:mt-12 mt-[125px]" defaultValue="About Me">
        <TabsList className="grid w-full grid-cols-4 bg-black text-white" data-aos="fade-up">
          <TabsTrigger className="text-[10px] md:text-[14px]" value="About Me">About Me</TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="Website Projects">Website Projects</TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="Design Projects">Design Projects</TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="College Assigments">College Assigments</TabsTrigger>
        </TabsList>
        <TabsContent value="About Me" className="py-12 flex flex-col gap-y-16">
          <Experiences />
          <TechStacks />
          <DesignTools />
        </TabsContent>
        <TabsContent value="Website Projects" className="py-12 flex flex-col gap-y-16 my-[-95px]">
          <WebsiteProjects />
        </TabsContent>
        <TabsContent value="Design Projects" className="py-12 flex flex-col gap-y-16">

        </TabsContent>
        <TabsContent value="College Assigments" className="py-12 flex flex-col gap-y-16">

        </TabsContent>
      </Tabs>
    </main>
  );
}
