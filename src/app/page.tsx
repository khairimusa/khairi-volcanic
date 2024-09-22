import Hero from "@/components/Hero";
import LatestJobs from "@/components/LatestJobs";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="pt-[94vh]"></div>
      <LatestJobs />
    </div>
  );
}
