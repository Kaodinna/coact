const Footer = () => {
  return (
    <div className="px-[4%] bg-[#f9fafc] md:pt-32 pt-16 pb-12">
      <div className="flex md:flex-row flex-col gap-8 ">
        <div className="md:w-[40%] w-full">
          <img src="/images/logo.svg" alt="" className="w-[162px] h-[59px]" />
          <p className="text-[#151515] text-[24px] leading-[100%] font-[400] mt-6">
            Coact Network is a venture studio building products that refine
            industries, simplify life, and explore the ideas shaping tomorrow.
          </p>
        </div>
        <div className="md:w-[60%] w-full flex md:flex-row flex-col gap-12 ">
          <div className="md:w-1/4 w-full">
            <p className="text-[#a8a8a8] text-[24px] leading-[100%] font-[700] ">
              EXPLORE
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              Products
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              Investors
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              FAQs
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              Events
            </p>
          </div>
          <div className="md:w-1/4 w-full">
            <p className="text-[#a8a8a8] text-[24px] leading-[100%] font-[700] ">
              CONNECT
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              Features
            </p>
            <p className="text-[#000000] text-[24px] leading-[100%] font-[400] mt-6">
              Benefits
            </p>
          </div>
          <div className="md:w-2/4 w-full flex flex-col">
            <p className="text-[#a8a8a8] text-[24px] leading-[100%] font-[700] ">
              NEWSLETTER
            </p>
            <input
              placeholder="Enter your email address"
              type="text"
              className="border-[#d9d9d9] rounded-[10px] h-[69px] border-[1px] mt-8 text-[#000000] w-full px-8"
            />
            <button className="bg-[#551ff2] py-[20px] px-[40px] mt-4 rounded-[5px] text-[20px] font-[400] text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24 border-[#000000] border-t md:p-8 items-center flex justify-between md:flex-row flex-col">
        <p className="text-[#151515] md:text-[24px] text-[12px] leading-[100%] font-[400] mt-4 md:mt-0">
          Copyright 2025, All Rights Reserved by Coact Network
        </p>
        <div className="flex flex-row  justify-end md:items-center gap-12 mt-4 md:mt-0">
          <p className="text-[#151515] md:text-[24px] text-[12px] leading-[100%] font-[400] ">
            Privacy Policy
          </p>
          <p className="text-[#151515] md:text-[24px] text-[12px] leading-[100%] font-[400] ">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
