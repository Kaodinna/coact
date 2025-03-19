import { GoArrowLeft } from "react-icons/go";
import { SelectInput, TextAreaInput, TextInput } from "../components/reusables";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
const Venture = () => {
  const [step, setStep] = useState(1);
  const totatStep = 4;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
  });
  const nextStep = () => {
    if (step < totatStep) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className=" flex flex-row  min-h-screen ">
      <div className="px-[2%] w-[35%] bg-[#F3F1F9] flex flex-col pt-[24px] flex-1 pb-8">
        <img src="/images/logo.svg" alt="" className="w-[162px] h-[59px]" />
        <div className="py-[12px] px-[22px] gap-[10px] flex flex-row items-center mt-4">
          <GoArrowLeft />
          <p className="font-[400] text-[20px] leading-[100%] text-[#565656]">
            {" "}
            Back Home
          </p>
        </div>
        <p className="font-[400] text-[35px] leading-[100%] text-[#000000] mt-6">
          Lead a Venture
        </p>
        <p className="font-[400] text-[24px] leading-[100%] text-[#000000] mt-6">
          Take charge of a startup within our ecosystem. We provide the
          foundation—you bring the vision and drive to build something
          transformative.
        </p>
        <div className="flex items-start mt-6">
          <div className="md:py-[18px] py-[10px] px-[36px] bg-[#551ff2] rounded-[50px] border-[#ffffff] border-[1px] hover:bg-[#8a78f8] cursor-pointer">
            <p className="text-[20px] font-[700] text-[#ffffff]">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="px-[2%] w-[65%] bg-[#ffffff] pt-[32px] pb-8">
        <p className="text-[35px] font-[700] text-[#000000]">
          Please fill in the form below;
        </p>
        <div className="flex flex-row mt-4 gap-3">
          <div className="flex flex-col items-center gap-3">
            <span
              className={`w-[44px] h-[44px] rounded-full border-[#551FF2] border-[1px] flex items-center justify-center ${
                step > 1 ? "bg-[#551FF2]" : ""
              }`}
            >
              <p
                className={`text-[20px] font-[300]  ${
                  step > 1 ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                1
              </p>
            </span>
            <p className="text-[20px] font-[400] text-[#551FF2]">Basic</p>
          </div>
          <div className="h-[1px] bg-[#000000] w-[160px] mt-6"></div>
          <div className="flex flex-col items-center gap-3">
            <span
              className={`w-[44px] h-[44px] rounded-full border-[#551FF2] border-[1px] flex items-center justify-center ${
                step > 2 ? "bg-[#551FF2]" : ""
              }`}
            >
              <p
                className={`text-[20px] font-[300] text-[#000000] ${
                  step > 2 ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                2
              </p>
            </span>
            <p
              className={`text-[20px] font-[400]  text-center ${
                step >= 2 ? "text-[#551FF2]" : "text-[#000000]"
              }`}
            >
              Role &<br /> Preference
            </p>
          </div>
          <div className="h-[1px] bg-[#000000] w-[160px] mt-6"></div>
          <div className="flex flex-col items-center gap-3">
            <span
              className={`w-[44px] h-[44px] rounded-full border-[#551FF2] border-[1px] flex items-center justify-center ${
                step > 3 ? "bg-[#551FF2]" : ""
              }`}
            >
              <p
                className={`text-[20px] font-[300] ${
                  step > 3 ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                3
              </p>
            </span>
            <p
              className={`text-[20px] font-[400]  text-center ${
                step >= 3 ? "text-[#551FF2]" : "text-[#000000]"
              }`}
            >
              Your
              <br />
              Application
            </p>
          </div>
          <div className="h-[1px] bg-[#000000] w-[160px] mt-6"></div>
          <div className="flex flex-col items-center gap-3">
            <span className="w-[44px] h-[44px] rounded-full border-[#551FF2] border-[1px] flex items-center justify-center">
              <p className="text-[20px] font-[300] text-[#000000]">4</p>
            </span>
            <p
              className={`text-[20px] font-[400]  text-center ${
                step === 4 ? "text-[#551FF2]" : "text-[#000000]"
              }`}
            >
              Process <br />
              Screening
            </p>
          </div>
        </div>
        {step === 1 && (
          <div className="grid grid-cols-2 gap-6 mt-6">
            {" "}
            <TextInput
              type="text"
              label="First Name"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
              placeholder="First Name"
            />
            <TextInput
              type="text"
              label="Last Name"
              value={formData.firstName}
              onChange={(value) => handleChange("lastName", value)}
              placeholder="Last Name"
            />
            <TextInput
              type="email"
              label="Email"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder="Email"
            />
            <TextInput
              type="tel"
              label="Phone Number"
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              placeholder="Phone Number"
            />
            <SelectInput
              placeholder="Country"
              label="Country of Residence"
              selectedValue={formData.country}
              onChange={(value) => handleChange("country", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="State"
              label="State of Residence"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-2 gap-6 mt-6">
            <SelectInput
              placeholder="Ideal Role"
              label="Ideal Role"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Preferred Job Type"
              label="Preferred Job Type"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Preferred Work Mode"
              label="Preferred Work Mode"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="At what stage are you willing to get involved?"
              label="At what stage are you willing to get involved?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <TextInput
              type="text"
              label="Linkedln"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder="Linkedln profile (optional)"
            />
            <TextInput
              type="email"
              label="Email"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder="Email"
            />
            <TextInput
              type="email"
              label="Website Url"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder="Website/Portfolio (if any)"
            />
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-2 gap-6 mt-6">
            {" "}
            <TextAreaInput
              label="What problem do you want to solve, and why does it matter?"
              value={formData.email}
              onChange={(value) => handleChange("state", value)}
              placeholder="Tell us a little"
            />
            <TextAreaInput
              label="Have you built or led a startup before? (Yes / No)"
              value={formData.email}
              onChange={(value) => handleChange("state", value)}
              placeholder="If yes, provide details (Name, Industry, Role, Outcome"
            />
            <SelectInput
              placeholder="Work & Wealth"
              label="Which sector best aligns with your vision?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Product"
              label="What’s your core skill set?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col gap-6 mt-6">
            <SelectInput
              placeholder="The Architect - I see patterns, systems, and structures everywhere. My focus is on thinkng how things"
              label="Core Identity Check (Choose One)"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="What’s a fundamental belief you once held but later changed your mind about?"
              label="The smartest person in the room is always the most successful"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="If you had unlimited resources, what’s the first thing you would build or explore?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="How do you think the structures of work, wealth, and ownership will evolve in the next 50 years?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="Do you see entrepreneurship as a tool for survival, exploration, or something else?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="You’re given control over a new venture. What’s your first move?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="What do you prioritize more: vision or execution?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="How do you handle setbacks and failures?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="How do you handle being wrong in a discussion?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <SelectInput
              placeholder="Start a business that guarantees financial freedom"
              label="Finally, do you ever think about existential questions like the nature of humanity, intelligence, or the future of civilization?"
              selectedValue={formData.state}
              onChange={(value) => handleChange("state", value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
          </div>
        )}
        <div className="flex flex-row gap-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="md:py-[14px] py-[10px] md:px-[30px] px-[15px] bg-[#E8E8E8] rounded-[50px]  mt-12 flex flex-row items-center  md:gap-[16px] gap-[8px] hover:bg-[#8a78f8] cursor-pointer"
            >
              <p className="md:text-[18px] font-[400] text-[#000000] text-[12px]">
                Previous
              </p>
              <HiArrowLeft className="w-[24px] h-[24px] text-black" />
            </button>
          )}
          <button
            onClick={nextStep}
            className="md:py-[14px] py-[10px] md:px-[30px] px-[15px] bg-[#000000] rounded-[50px]  mt-12 flex flex-row items-center  md:gap-[16px] gap-[8px] hover:bg-[#8a78f8] cursor-pointer"
          >
            <p className="md:text-[18px] font-[400] text-[#ffffff] text-[12px]">
              Next
            </p>
            <HiArrowRight className="w-[24px] h-[24px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Venture;
