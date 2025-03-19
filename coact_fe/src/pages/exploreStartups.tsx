import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ExploreStartups = () => {
  const jobs = [
    {
      id: 1,
      image: "/images/image-17.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co-Founder",
    },
    {
      id: 2,
      image: "/images/image-18.png",
      title: "Flutterflow Developer",
      tags: ["Remote", "MVP", "Engineering Sales", "Engineering Sales"],
      profileRole: "Startup Jobs",
    },
    {
      id: 3,
      image: "/images/image-19.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 4,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 5,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 6,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 7,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 8,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
    {
      id: 9,
      image: "/images/image-20.png",
      title: "Founders Wanted:Builders of the Future",
      tags: [
        "Remote",
        "Exploration & Discovery",
        "Private Beta",
        "Founders, Operations, Product, Engineering & Marketing",
      ],
      profileRole: "Co- Founder",
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-col pb-16 ">
        <div className="flex flex-col px-[4%]">
          <p className="text-[#000000] md:text-[104px] text-[50px] leading-[100%] font-[600] md:mt-[100px] mt-[50px]">
            Exploring
            <br /> What’s Next,Together.
          </p>
          <p className="text-[#000000] text-[20px] leading-[100%] font-[300] mt-[24px] md:w-[40%] w-full">
            Find startups to invest in, collaborate with, or join across
            industries. Get insights into what’s being built and why.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-[8px] mt-[24px] ">
            <Link to={"/venture"}>
              <div className="md:py-[18px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px] hover:bg-[#8a78f8] cursor-pointer">
                <p className="text-[20px] font-[700] text-[#ffffff]">
                  Apply to Lead
                </p>
              </div>
            </Link>
            <div className="md:py-[18px] py-[10px] px-[54px] bg-[#ffffff] rounded-[50px] border-[#000000] border-[1px]">
              <p className="text-[20px] font-[700] text-[#000000]">
                Build with Us
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center  gap-6 mt-12 px-[4%]">
          {jobs.map(() => (
            <div className=" bg-[#f9fafc] rounded-[15px] border-[#c1b1b1]  border-[1px]">
              <div className="p-3">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src="/images/image-3.svg"
                    alt=""
                    className="w-[53px] h-[53px]"
                  />
                  <div>
                    {" "}
                    <p className="text-[24px] font-[700] text-[#151515]">
                      Join a Startup
                    </p>
                    <p className="text-[20px] font-[400] text-[#151515]">
                      Technology & Creativity
                    </p>
                  </div>
                </div>
                <p className="text-[24px] font-[400] text-[#151515] mt-6">
                  Better ways to build and create
                </p>
              </div>
              <div className="bg-[#c1b1b1] h-[1px]"></div>
              <div className="p-3 flex flex-row justify-between">
                {" "}
                <div className="py-[10px] px-[30px]  rounded-[30px] border-[#000000] border-[1px]">
                  <p className="text-[17px] font-[400] text-[#000000]">
                    PRIVATE BETA
                  </p>
                </div>
                <p className="text-[20px] font-[300] text-[#000000]">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-[4%]">
          <p className="text-[#000000] md:text-[104px] text-[32px] leading-[100%] font-[600] md:mt-[100px] mt-[50px]">
            Not Ours,
            <br /> But Worth Knowing
          </p>
          <p className="text-[#000000] text-[20px] leading-[100%] font-[300] mt-[24px] md:w-[40%] w-full">
            Find startups to invest in, collaborate with, or join across
            industries. Get insights into what’s being built and why.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-[8px] mt-[24px] ">
            <div className="md:py-[22px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px] hover:bg-[#8a78f8] cursor-pointer">
              <p className="text-[20px] font-[700] text-[#ffffff]">
                Apply to Lead
              </p>
            </div>
            <div className="md:py-[22px] py-[10px] px-[54px] bg-[#ffffff] rounded-[50px] border-[#000000] border-[1px]">
              <p className="text-[20px] font-[700] text-[#000000]">
                Build with Us
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center  gap-6 mt-12 px-[4%]">
          {jobs.map(() => (
            <div className=" bg-[#f9fafc] rounded-[15px] border-[#c1b1b1]  border-[1px]">
              <div className="p-3">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src="/images/image-3.svg"
                    alt=""
                    className="w-[53px] h-[53px]"
                  />
                  <div>
                    {" "}
                    <p className="text-[24px] font-[700] text-[#151515]">
                      Join a Startup
                    </p>
                    <p className="text-[20px] font-[400] text-[#151515]">
                      Technology & Creativity
                    </p>
                  </div>
                </div>
                <p className="text-[24px] font-[400] text-[#151515] mt-6">
                  Better ways to build and create
                </p>
              </div>
              <div className="bg-[#c1b1b1] h-[1px]"></div>
              <div className="p-3 flex flex-row justify-between">
                {" "}
                <div className="py-[10px] px-[30px]  rounded-[30px] border-[#000000] border-[1px]">
                  <p className="text-[17px] font-[400] text-[#000000]">
                    PRIVATE BETA
                  </p>
                </div>
                <p className="text-[20px] font-[300] text-[#000000]">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExploreStartups;
