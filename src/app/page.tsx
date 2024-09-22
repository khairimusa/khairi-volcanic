import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestInsights from "@/components/LatestInsights";
import LatestJobs from "@/components/LatestJobs";
import Testimonials from "@/components/Testimonials";
import WorkForUs from "@/components/WorkForUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="pt-[95vh] sm:pt-[99vh]"></div>
      <LatestJobs />
      <AboutUs />
      <Testimonials />
      <WorkForUs />
      <LatestInsights />
      <Footer />
    </div>
  );
}
