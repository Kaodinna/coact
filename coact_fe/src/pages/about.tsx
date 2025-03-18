import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiArrowRight } from "react-icons/hi2";
const About = () => {
  const content = [
    {
      icon: "/images/flower.svg",
      title: "Innovators",
      body: "Exploring new ideas and possibilities.",
    },
    {
      icon: "/images/engineer.svg",

      title: "Engineers & Designers",
      body: "Exploring new ideas and possibilities.",
    },
    {
      icon: "/images/founders.svg",

      title: "Founders & Operators",
      body: "The executors keeping ventures on track.",
    },
    {
      icon: "/images/investors.svg",

      title: "Investors & Partners",
      body: "Providing the fuel to go further.",
    },
  ];
  const playbook = [
    {
      title: "The Power of Community",
      body: "Data, patterns, cycles, windows, gaps.",
    },
    {
      title: "Technology is a Tool, Not the Solution",
      body: "Technology is just the starting point; the real solution is how we use it.",
    },
    {
      title: "Ride Windows, Not Trends",
      body: "We don’t chase hype. We identify patterns, cycles, windows, and gaps, then build solutions that fit the moment and the future.",
    },
    {
      title: "We always have something cooking",
      body: "We never stop learning, and there’s always something exciting simmering in our startup kitchen.",
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" ">
        <div className="flex flex-col ">
          <div className="flex flex-col px-[4%]">
            <p className="text-[#000000] md:text-[104px] text-[50px] leading-[100%] font-[600] md:mt-[100px] mt-[50px]">
              On a mission
              <br /> to shape tomorrow
            </p>
            <p className="text-[#000000] text-[20px] leading-[100%] font-[300] mt-[24px] md:w-[40%]">
              We’re Coact Network—a venture studio building products that make
              life easier, work better, and push the boundaries of what’s
              possible.
            </p>
            <div className="flex flex-row items-center gap-[8px] mt-[24px] ">
              <div className="md:py-[22px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px]">
                <p className="text-[20px] font-[700] text-[#ffffff]">Join us</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center md:gap-4 gap-2 md:mt-12 mt-8 px-[4%]">
            <div className="w-[65%]">
              <img
                src="/images/img1.png"
                alt=""
                className="md:rounded-[30px] rounded-[15px] md:h-[662px] h-[300px]"
              />
            </div>
            <div className="w-[35%] flex flex-col md:gap-4 gap-2 justify-between">
              <img
                src="/images/img2.png"
                alt=""
                className="md:rounded-[30px] md:h-[317px] h-[140px] rounded-[15px]"
              />
              <img
                src="/images/img3.png"
                alt=""
                className="md:rounded-[30px] md:h-[317px] h-[140px] rounded-[15px]"
              />
            </div>
          </div>

          <div className="flex flex-col   pb-6 px-[4%] md:mt-24 mt-12">
            <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
              So, Who are we?
            </p>
            <p className="md:text-[46px] text-[24px] font-[700] text-[#151515] mt-6">
              We’re a collective of builders, thinkers, and
              <br /> problem-solvers who believe the best way to
              <br /> predict the future is to create it.
            </p>
            <div className="flex flex-col mt-16">
              {content.map((contents, index) => (
                <div
                  className={` md:w-1/3 w-full p-4 border-[#c1b1b1] border-t flex flex-row gap-8`}
                  key={index}
                >
                  <img
                    src={contents.icon}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div>
                    <p className="text-[35px] font-[400] text-[#000000] leading-[100%]">
                      {contents.title}
                    </p>
                    <p className="text-[20px] font-[300] text-[#000000] mt-8 leading-[100%]">
                      {contents.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" py-16 bg-[#000000] px-[4%]">
            <div className="border-[#c1b1b1] border-b pb-6">
              <p className="text-white text-[24px] font-[400] md:w-[80%] w-full">
                The world is changing fast. Technology is evolving, industries
                are shifting, and new ways of thinking are reshaping how we live
                and work.
                <br />
                <br /> We’re not just watching it happen—we’re building the
                tools, businesses, and systems that will define what comes next.
              </p>
            </div>
            <div className="border-[#c1b1b1] border-b py-6">
              <p className="text-white text-[24px] font-[400] md:w-[80%] w-full">
                We’re not tied to one industry, one technology, or one way of
                thinking. Instead, we focus on what needs to exist—whether it’s
                tools that make life easier, platforms that explore new
                possibilities, or systems that push the boundaries of what we
                understand.
              </p>
            </div>
            <div className=" pt-6">
              <p className="text-white text-[24px] font-[400] md:w-[80%] w-full">
                We’re not tied to one industry, one technology, or one way of
                thinking. Instead, we focus on what needs to exist—whether it’s
                tools that make life easier, platforms that explore new
                possibilities, or systems that push the boundaries of what we
                understand.
              </p>
            </div>
          </div>
          <div className=" py-16 bg-[#ffffff] px-[4%]">
            <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
              Our Mission
            </p>
            <p className="md:text-[35px] text-[24px] font-[400] text-[#000000] leading-[100%] mt-6 md:w-[80%] w-full">
              Build the tools, products, and systems that refine industries
              today and shape tomorrow.
              <br />
              <br /> Our mission is simple:identify what needs to exist and
              build it. We explore ideas, test what works, and turn concepts
              into real, working products that improve how people live, work,
              and interact with the world. Whether it’s developing technology
              that makes life easier, creating new ways for businesses to grow,
              or rethinking outdated systems, we’re here to{" "}
              <strong> build what’s next.</strong>
              <br />
              <br />
              We move fast, experiment constantly, and refine relentlessly.
            </p>
          </div>
          <div className="bg-[#f3f1f9] flex flex-col  py-24 px-[4%]">
            <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
              What We Believe
            </p>
            <p className="md:text-[78px] text-[32px] font-[400] text-[#000000] leading-[100%] mt-6 md:w-[80%] w-full">
              The Engine That Moves
              <br /> Startups Forward
            </p>
            <p className="md:text-[35px] text-[24px] font-[400] text-[rgb(0,0,0)] leading-[100%] mt-6 md:w-[80%] w-full">
              Ideas alone don’t change the world—execution does.
              <br />
              <br /> Coactng is the engine powering startups from concept to
              scale, ensuring they don’t just start but thrive.
              <br />
              <br /> We don’t just build startups; we build the systems that
              make startups work. From infrastructure to operations, sales,
              marketing, product, and beyond—we create the vehicle that carries
              ideas from 0 to 1, and 1 to 100.
            </p>
            <div className="flex flex-col mt-16 gap-4">
              {playbook.map((contents, index) => (
                <div
                  className={` md:w-[80%] w-full p-4 bg-white rounded-[15px] flex flex-row md:gap-8 gap-2`}
                  key={index}
                >
                  <div className="md:w-[42px] md:h-[42px] w-[32px] h-[32px] rounded-full bg-[#f3f1f9] flex justify-center items-center">
                    <img
                      src="/images/ear.svg"
                      alt=""
                      className="md:w-[20px] md:h-[20px] w-[12px] h-[12px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="md:text-[35px] text-[24px] font-[400] text-[#000000] leading-[100%]">
                      {contents.title}
                    </p>
                    <p className="md:text-[24px] text-[16px] font-[300] text-[#000000] md:mt-8 mt-4 leading-[100%]">
                      {contents.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
