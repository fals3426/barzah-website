"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Models from "@/components/Models";
import WhyBarzah from "@/components/WhyBarzah";
import Advantages from "@/components/Advantages";
import Technology from "@/components/Technology";
import WhoWeServe from "@/components/WhoWeServe";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import InterestForm from "@/components/InterestForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <div className="relative">
        <div className="absolute inset-0 opacity-0" />
        <div className="relative">
          <Header />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <VisionMission />
            <Models />
            <WhyBarzah />
            <Advantages />
            <Technology />
            <WhoWeServe />
            <HowItWorks />
            <Roadmap />
            <InterestForm />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
