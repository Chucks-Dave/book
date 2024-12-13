import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    from_email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.from_name.trim()) errors.from_name = "Full name is required";
    if (!formData.message.trim())
      errors.message = "WhatsApp number is required";
    if (!formData.from_email.trim()) errors.from_email = "Email is required";
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        setLoading(true);
        await emailjs
          .sendForm(
            "service_1oiwoak",
            "template_820aboi",
            form.current,
            "hCnsJBX0CgfhKztGR"
          )
          .then(
            (result) => {
              console.log(result.text);
              window.location.href =
                "https://chat.whatsapp.com/ESCoKSAyQ15ELKLA51TFYh";
            },
            (error) => {
              console.log(error.text);
            }
          );
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     try {
  //       setLoading(true);
  //       emailjs
  //         .sendForm(
  //           "service_1oiwoak",
  //           "template_820aboi",
  //           form.current,
  //           "hCnsJBX0CgfhKztGR"
  //         )
  //         .then(
  //           (result) => {
  //             console.log(result.text);
  //           },
  //           (error) => {
  //             console.log(error.text);
  //           }
  //         );
  //     } catch {
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  return (
    <div className=" lg:w-[55%] rounded-[10px] bg-white space-y-4 shadow-2xl px-9 lg:py-16 max-md:py-1">
      <div className="pt-7">
        <div className="w-full border-black border-dashed bg-[#FFAE0E40] border-2 px-5 ">
          <p className="text-[#ff0000] font-bold text-[30px]">
            PLEASE NOTE:{" "}
            <span className="font-normal text-[#1A1A1A] text-center text-[20px] leading-tight">
              The New Way to Land An Entry Level Job as a Graduate in 30
              Days…Without Submitting CVs Up and Down
            </span>
          </p>
        </div>
      </div>
      <div className="py-1 lg:space-y-6">
        <h1 className="text-center text-[#ff0000] font-medium text-[30px] underline">
          Exclusive Training Reveal
        </h1>
        <div className="flex justify-center items-center">
          <span className="font-semibold text-[#1A1A1A] text-center text-[33px]   leading-tight">
            The New Way to Land An{" "}
            <span className="text-[#ff0000]  text-[35px] text-pretty text-center">
              Entry Level Job
            </span>{" "}
            as a Graduate{" "}
            <span className="text-black font-bold text-center text-[35px] ">
              in 30 Days…
            </span>
            Without Submitting CVs Up and Down
          </span>
        </div>
      </div>
      <form
        className="space-y-5 lg:pt-6 max-md:pt-1"
        ref={form}
        onSubmit={sendEmail}
      >
        <CustomInput
          label="Full Name"
          placeholder="Enter Your Name"
          //   required
          name="from_name"
          value={formData.from_name}
          onChange={handleInputChange}
          error={formErrors.from_name}
        />
        <CustomInput
          label="WhatsApp Phone Number"
          placeholder="Enter Your WhatsApp Number"
          //   required
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={formErrors.message}
        />
        <CustomInput
          label="E-mail"
          placeholder="Enter Your Email"
          //   required
          name="from_email"
          value={formData.from_email}
          onChange={handleInputChange}
          error={formErrors.from_email}
        />
        <div className="py-6">
          <button
            type="submit"
            className="w-full bg-blue py-5 rounded-[8px] text-white font-medium font-outfit text-[1rem] leading-[1rem]"
          >
            {loading ? "LOADING....." : "REGISTER NOW"}
          </button>
        </div>
      </form>
    </div>
  );
};

const CustomInput = ({
  placeholder,
  label,
  type,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <label className="text-[20px] font-bold text-darkgray">{label}</label>
        <input
          className="w-full rounded-[4px] px-5 py-[15px] drop-shadow-lg focus:outline-none"
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          {...props}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};
