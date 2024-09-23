"use client";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestInsights from "@/components/LatestInsights";
import LatestJobs from "@/components/LatestJobs";
import Testimonials from "@/components/Testimonials";
import WorkForUs from "@/components/WorkForUs";
import { useAppContext } from "@/context";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestJobs />
      <AboutUs />
      <Testimonials />
      <WorkForUs />
      <LatestInsights />
      <Footer />
    </div>
  );
}
