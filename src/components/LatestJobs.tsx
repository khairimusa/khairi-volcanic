"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./Card";
import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

import { getJobs } from "@/utils/db/actions";
import { useAppContext } from "@/context";

const LatestJobs = () => {
  const [jobLists, setJobLists] = useState<any>([]);
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const { user } = useAppContext();

  useEffect(() => {
    async function fetchImpactData() {
      try {
        const jobs = await getJobs(100);
        const jobsTotal = jobs.length;
        setTotalJobs(jobsTotal);
        setJobLists(jobs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchImpactData();
  }, []);

  useEffect(() => {
    console.log("re-renderring LatesJobs component");
  }, [user]);

  function abbreviateThousands(value: number) {
    const num = Number(value);
    const absNum = Math.abs(num);
    const sign = Math.sign(num);
    const numLength = Math.round(absNum).toString().length;
    const symbol = ["K", "M", "B", "T", "Q"];
    const symbolIndex = Math.floor((numLength - 1) / 3) - 1;
    const abbrv = symbol[symbolIndex] || symbol[symbol.length - 1];
    let divisor = 0;
    if (numLength > 15) divisor = 1e15;
    else if (numLength > 12) divisor = 1e12;
    else if (numLength > 9) divisor = 1e9;
    else if (numLength > 6) divisor = 1e6;
    else if (numLength > 3) divisor = 1e3;
    else return num;
    return `${((sign * absNum) / divisor).toFixed(0)}${abbrv}`;
  }

  const isEmptyObj = (obj: any) => {
    if (!obj) return true;
    return Object.values(obj).every((val) => !val);
  };

  return (
    <>
      {!isEmptyObj(user) ? (
        <div
          id="latest-job"
          className="px-4 md:px-10 py-10  text-black flex flex-col justify-center items-center "
        >
          <span className="text-3xl font-medium">Latest Jobs</span>
          {totalJobs > 0 ? (
            <div className="w-full flex py-8">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full max-w-screen-2xl mx-auto"
              >
                <CarouselContent>
                  {jobLists.map((job: any, index: any) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                    >
                      <div className="flex flex-col justify-center items-center">
                        <Card className="select-none group w-75 h-80 flex items-top justify-center border-0 bg-orange text-white hover:bg-gray-200 hover:text-orange cursor-pointer rounded-none">
                          <CardContent className="relative flex flex-col items-start justify-start p-6 leading-6">
                            <span className="text-xl font-semibold pb-4">
                              {job.title}
                            </span>
                            <span className="text-base font-semibold pb-4 text-left">
                              {`${job.currency} ${abbreviateThousands(
                                job.minimumSalary
                              )} - ${job.currency} ${abbreviateThousands(
                                job.maximumSalary
                              )} | ${job.location}`}
                            </span>
                            <span className="text-left text-sm group-hover:text-black">
                              {`${job.description}`}
                            </span>
                            <button className="text-sm px-8 py-3 bg-gray-200 text-black border-t-gray-300 border-l-gray-300 absolute bottom-0 right-0 group-hover:text-white group-hover:bg-orange">
                              APPLY
                            </button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center h-96">
              0 Available Positions
            </div>
          )}
        </div>
      ) : (
        <div
          id="latest-job"
          className="min-h-[510px] px-4 md:px-10 py-10  text-black flex flex-col justify-center items-center "
        >
          Please Login To View Latest Jobs
        </div>
      )}
    </>
  );
};

export default LatestJobs;
