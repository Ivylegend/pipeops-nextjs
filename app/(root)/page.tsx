import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { awardWinning, heroFeatures, tourParis } from "@/constants";
import Link from "next/link";
import Heading from "@/components/Heading";
import ImageComp from "@/components/ImageComp";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div>
        <h1 className="text-center my-8 font-extrabold px-8 text-4xl lg:px-0 lg:text-6xl">
          Explore places to visit
        </h1>
        <div className="my-8 mx-8 md:mx-0 overflow-scroll md:overflow-auto">
          <ul className="flex justify-center items-center min-w-full gap-8">
            {heroFeatures.map((item) => (
              <li
                key={item.label}
                className="font-medium text-gray-500 text-normal"
              >
                <Link href={item.route}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center px-8 lg:px-0">
          <Search className="w-full lg:w-[50rem]" />
        </div>
        <div className="p-8 lg:px-32 lg:py-16 flex flex-col gap-6">
          <Heading
            title="Stay somewhere award winning"
            subtext="2024’s Travelers’ Choice Awards Best of the Best Hotels"
          />
          <div className="flex overflow-x-scroll gap-8">
            {awardWinning.map((item, index) => (
              <ImageComp
                key={index}
                imageText={item.label}
                image={item.route}
              />
            ))}
          </div>
        </div>
        <div className="p-8 lg:px-32 lg:pb-16 flex flex-col gap-6">
          <Heading
            title="Ways to tour Paris"
            subtext="Book these experiences for a close-up look at Paris."
          />
          <div className="flex overflow-x-scroll gap-8">
            {tourParis.map((item, index) => (
              <ImageComp
                key={index}
                image={item.route}
                like
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
