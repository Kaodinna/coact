import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Opportunities = () => {
  const content = [
    "All Categories",
    "Partnership",
    "Founding Team",
    "Startup",
    "Co-founder Search",
  ];

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
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" ">
        <div className="flex flex-col ">
          <div className="flex flex-col px-[4%]">
            <p className="text-[#000000] md:text-[104px] text-[50px] leading-[100%] font-[600] md:mt-[100px] mt-[50px]">
              Explore Available
              <br /> Opportunities
            </p>
            <p className="text-[#000000] text-[20px] leading-[100%] font-[300] mt-[24px] md:w-[40%] w-full">
              Discover diverse opportunities that can accelerate your
              entrepreneurial journey and drive your startup to success
            </p>
            <div className="flex flex-row items-center gap-[8px] mt-[24px] ">
              <div className="md:py-[22px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px]">
                <p className="text-[20px] font-[700] text-[#ffffff]">
                  {" "}
                  List Startup Opportunity
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center md:gap-4 gap-2 md:mt-12 mt-8 px-[4%]">
            <div className="w-[65%]">
              <img
                src="/images/img4.png"
                alt=""
                className="md:rounded-[30px] rounded-[15px] md:h-[662px] h-[300px]"
              />
            </div>
            <div className="w-[35%] flex flex-col md:gap-4 gap-2 justify-between">
              <img
                src="/images/img5.png"
                alt=""
                className="md:rounded-[30px] md:h-[317px] h-[140px] rounded-[15px]"
              />
              <img
                src="/images/img6.png"
                alt=""
                className="md:rounded-[30px] md:h-[317px] h-[140px] rounded-[15px]"
              />
            </div>
          </div>

          <div className="flex flex-col   pb-12 px-[4%] mt-24">
            <p className="text-[24px] font-[400] text-[#000000] border-[#551ff2] border-l-[4px] pl-4">
              Opportunity Listing
            </p>
            <p className="md:text-[46px] text-[24px] font-[700] text-[#151515] mt-6">
              Latest Startup Opportunity
            </p>
            <div className="flex flex-row items-center gap-[8px] mt-[24px] ">
              <div className="md:py-[22px] py-[10px] px-[54px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px]">
                <p className="text-[20px] font-[700] text-[#ffffff]">
                  View All Listing
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row items-center gap-8 overflow-x-scroll w-full">
              {content.map((contents, index) => (
                <p
                  className="text-[20px] font-[300] text-[#000000]  text-nowrap"
                  key={index}
                >
                  {contents}
                </p>
              ))}
            </div>
            <div className="flex md:flex-row flex-col mt-8 gap-6 overflow-x-scroll">
              {jobs.map((job, index) => (
                <div
                  className="md:w-1/4 w-full border-[#000000] rounded-[15px]  border-[1px] flex flex-col "
                  key={index}
                >
                  <img
                    src={job.image}
                    alt=""
                    className="rounded-[10px] p-3 h-[300px]"
                  />
                  <div className="p-3 flex-1 flex flex-col">
                    <p className="text-[24px] font-[400] text-[#000000] mt-4">
                      {job.title}
                    </p>
                    <div className="flex flex-col mt-4">
                      {job.tags.map((tag, index) => (
                        <div
                          className="flex flex-row items-center gap-3"
                          key={index}
                        >
                          <img
                            src="/images/tag.svg"
                            alt=""
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-[20px] font-[300] text-[#000000] ">
                            {tag}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#c1b1b1] h-[1px]"></div>
                  <div className="p-3 flex flex-row items-center gap-4">
                    <img
                      src="/images/image-17.png"
                      alt=""
                      className=" p-3 h-[42px] w-[42px] rounded-full"
                    />
                    <p className="text-[20px] font-[300] text-[#000000] ">
                      {job.profileRole}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
