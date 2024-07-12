"use client"

import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Image from "next/image";
import useAos from "@/components/useAos";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import WebsiteProjects from "@/components/WebsiteProjects";
import CollegeProjects from "@/components/CollegeProjects";
import Education from "@/components/Education";
import OrganizationalExperience from "@/components/OrganizationalExperience";
import DesignProjects from "@/components/DesignProjects";

export default function Home() {
  useAos();
  
  return (
    <main className="my-4 w-full md:w-[750px] transition-all px-8 md:px-0">
      <About />

      <Tabs className="md:mt-12 mt-[125px]" defaultValue="About Me">
        <TabsList className="grid w-full grid-cols-4 bg-black text-white" data-aos="fade-up">
          <TabsTrigger className="text-[10px] md:text-[14px]" value="About Me">About Me</TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="Website Projects">Website<span className="hidden md:block ml-1.5"> Projects</span></TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="Design Projects">Design<span className="hidden md:block ml-1.5"> Projects</span></TabsTrigger>
          <TabsTrigger className="text-[10px] md:text-[14px]" value="College Assigments">College<span className="hidden md:block ml-1.5"> Assigments</span></TabsTrigger>
        </TabsList>
        <TabsContent value="About Me" className="py-12 flex flex-col gap-y-16">
          <Education />
          <Experiences />
          <OrganizationalExperience />
        </TabsContent>
        <TabsContent value="Website Projects" className="py-12 flex flex-col gap-y-16 my-[-95px]">
          <WebsiteProjects />
        </TabsContent>
        <TabsContent value="Design Projects" className="py-12 flex flex-col gap-y-16 my-[-95px]">
          <DesignProjects />
        </TabsContent>
        <TabsContent value="College Assigments" className="py-12 flex flex-col gap-y-16">
          <CollegeProjects />
        </TabsContent>
      </Tabs>
    </main>
  );
}
