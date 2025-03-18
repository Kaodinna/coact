import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiArrowRight } from "react-icons/hi2";
const Index = () => {
  const content = [
    {
      title: "For Founders",
      body: "Join forces with experienced operators and access resources to build your next venture.",
    },
    {
      title: "For Operators",
      body: "Work with ambitious teams and help shape the future of technology companies.",
    },
    {
      title: "For Investors",
      body: "Our resources, playbooks and capital de‑risks company building and accelerates your time to market.",
    },
    {
      title: "For Advisors",
      body: "Share your expertise. Guide future founders. Shape startups that last.",
    },
  ];
  const playbook = [
    {
      icon: "/images/ear.svg",
      title: "First, we listen.",
      body: "Data, patterns, cycles, windows, gaps.",
    },
    {
      icon: "/images/pen.svg",

      title: "Then, we design.",
      body: "Systems, not just products.",
    },
    {
      icon: "/images/spanner.svg",

      title: "Finally, we build.",
      body: "With precision, adaptability, and the long view in mind.",
    },
  ];
  const explore = [
    "Build a Venture with Us",
    "Join Our Team",
    "Partner & Invest",
  ];
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" ">
        <div className="flex flex-col">
          <div className="flex flex-col px-[4%] ">
            <p className="text-[#000000] md:text-[104px] text-[50px] leading-[100%] font-[600] md:mt-[100px] mt-[50px]">
              Building What’s Next
            </p>
            <p className="text-[#000000] text-[20px] leading-[100%] font-[300] mt-[24px] md:w-[40%]">
              We create products that help people live, learn, and grow—making
              everyday life simpler while exploring the ideas that shape our
              future.
            </p>
            <div className="flex flex-row items-center gap-[8px] mt-[24px] ">
              <div className="md:py-[22px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px]">
                <p className="text-[20px] font-[700] text-[#ffffff]">
                  Build with us
                </p>
              </div>
              <div className="h-[48px] w-[48px] rounded-full bg-[#551ff2] justify-center items-center flex">
                <HiArrowRight className="w-[20px] h-[24px] text-white" />
              </div>
            </div>
            <p className="text-[17px] font-[400] text-[#000000] text-center mt-[16px]">
              Option 2: Use "View-Only" Mode(Without Changing Permissions)
            </p>
            <img
              src="/images/hero1.png"
              alt=""
              className="rounded-[30px] md:h-[660px] mt-[16px] h-[300px]"
            />
          </div>

          <div className="flex flex-col px-[4%] mt-[32px]">
            <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
              So, Who are we?
            </p>
            <p className="md:text-[46px] text-[23px] font-[700] text-[#151515] mt-6">
              We’re a venture studio for the builders, the thinkers, and the
              curious—those who question what is and create what should be.
              <br />
              <br /> Our focus is simple: build what people need to thrive today
              while exploring the ideas that shape tomorrow.
            </p>
            <div className="flex flex-row items-center mt-12">
              <div className="bg-[#000000] rounded-tl-[30px] rounded-bl-[30px] w-1/2 md:h-[553px] h-[400px] pl-[12px]  md:pl-[32px] flex items-center">
                <div className="flex flex-col gap-[8px] md:w-[80%] w-[95%]">
                  <p className="md:text-[50px] text-[24px] font-[400] text-[#ffffff] leading-[100%]">
                    2024 SaaS Benchmarks
                    <br /> Report
                  </p>
                  <p className="md:text-[18px] text-[12px] font-[400] text-[#f5f5f5] leading-[100%]">
                    With insights from over 800 SaaS companies, the report
                    reveals what’s changing and what’s not for founders in 2024
                    and beyond.
                  </p>

                  <div className="md:py-[14px] py-[10px] md:px-[30px] px-[15px] bg-[#551ff2] rounded-[50px]  mt-6 flex flex-row items-center md:w-[280px] md:gap-[16px] gap-[8px]">
                    <p className="md:text-[20px] font-[400] text-[#ffffff] text-[12px]">
                      See All Companies
                    </p>
                    <HiArrowRight className="w-[24px] h-[24px] text-white" />
                  </div>
                </div>
              </div>
              <img
                src="/images/book.png"
                alt=""
                className="w-1/2 md:h-[553px] h-[400px] rounded-tr-[30px] rounded-br-[30px]"
              />
            </div>
            <div className="flex flex-col mt-16">
              <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
                Our growing ecosystem
              </p>
              <p className="md:text-[78px] text-[32px] font-[400] text-[#000000] mt-6 md:mt-0">
                Our Growing Ecosystem
              </p>
              <div className="flex md:flex-row mt-16 flex-col">
                {content.map((contents, index) => (
                  <div
                    className={` md:w-1/4 p-4 w-full ${
                      index === content.length - 1
                        ? ""
                        : "border-[#c1b1b1] md:border-r border-b md:border-b-[0px]"
                    }`}
                    key={index}
                  >
                    <img
                      src="/images/flower.svg"
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                    <p className="text-[35px] font-[400] text-[#000000] mt-8 leading-[100%]">
                      {contents.title}
                    </p>
                    <p className="text-[20px] font-[300] text-[#000000] mt-8 leading-[100%]">
                      {contents.body}
                    </p>
                  </div>
                ))}
              </div>
              <img
                src="/images/Capture.png"
                alt=""
                className="w-full h-[134px]"
              />
            </div>
          </div>
          <div className="bg-[#f3f1f9] flex flex-col px-[4%] pb-24">
            <p className="md:text-[78px] text-[32px] font-[400] text-[#000000] text-center mt-32">
              Our Open Playbook
            </p>
            <p className="text-[20px] font-[300] text-[#000000] text-center mt-4">
              We don’t just build products; we build the structures that sustain
              them.
            </p>
            <div className="mt-8 flex md:flex-row flex-col gap-4">
              {playbook.map((playbooks, index) => (
                <div
                  className="rounded-[15px] bg-[#ffffff] md:w-1/3 md:h-[411px] h-[300px] w-full flex flex-col justify-center p-8"
                  key={index}
                >
                  <div className="bg-[#f3f1f9] rounded-[10px] w-[82px] h-[82px] flex justify-center items-center">
                    <img
                      src={playbooks.icon}
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <p className="text-[35px] font-[400] text-[#000000] mt-6 leading-[100%]">
                    {playbooks.title}
                  </p>
                  <p className="text-[20px] font-[300] text-[#000000] mt-4 leading-[100%]">
                    {playbooks.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#000000] flex flex-col px-[4%] pb-24 pt-16">
            <p className="text-[24px] font-[400] text-[#ffffff] border-[#ffffff] border-l-[4px] pl-4">
              Benefits
            </p>
            <p className="md:text-[78px] text-[32px] font-[400] text-[#ffffff] mt-12">
              Explore the Ecosystem
            </p>
            <p className="text-[20px] font-[400] text-[#ffffff] mt-6 leading-[100%]">
              A network of ventures built to refine industries, explore new
              frontiers, and create lasting impact.
            </p>
            <div className="mt-8 flex md:flex-row flex-col gap-8 md:items-center">
              {explore.map((explores, index) => (
                <div className="flex flex-row items-center gap-2" key={index}>
                  <img
                    src="/images/repo.svg"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    {explores}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 md:mt-64 mt-24">
              <div className="flex md:flex-row justify-end gap-8 flex-col">
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] py-[10px] px-[20px] justify-center md:px-[40px] flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Work & Wealth
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Energy & Resources
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-end gap-8">
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Knowledge & Thought
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Exploration & Discovery
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-end gap-8">
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Media & Influence
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Trade & Commerce
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Food & Systems
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col  justify-end gap-8">
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Food & Systems
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] md:py-[20px] md:px-[40px] py-[10px] px-[20px] justify-center flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Mobility & Logistics
                  </p>
                </div>
                <div className="bg-[#3e3e3e] border-[#ffffff] border-[2px] rounded-[50px] py-[20px] px-[40px] flex flex-row gap-[16px]">
                  <img
                    src="/images/bag.svg"
                    alt=""
                    className="w-[36px] h-[36px]"
                  />
                  <p className="text-[24px] font-[400] text-[#ffffff] ">
                    Media & Influence
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col px-[4%] py-16 justify-between">
            <img
              src="/images/image-16.png"
              alt=""
              className="md:w-[40%] w-full md:h-[610px] h-[300px] rounded-[30px]"
            />
            <div className="md:w-[50%] w-full">
              <p className="md:text-[60px] text-[30px] font-[400] text-[#000000] leading-[100%] mt-4">
                We Build. We Explore.
                <br /> We Challenge.
              </p>
              <p className="text-[24px] font-[400] text-[#151515] leading-[100%] mt-8">
                With purpose and impact in the pursuit of what's next.
              </p>
              <div className="py-[22px] px-[54px]  rounded-[50px]  mt-8 flex flex-row items-center w-[302px] gap-[16px] border-[#d9d9d9] border-[1px]">
                <p className="text-[20px] font-[400] text-[#000000]">
                  Explore Startups
                </p>
                <HiArrowRight className="w-[24px] h-[24px] text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
