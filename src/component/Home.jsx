import React from "react";
import { useState, useEffect } from "react";
import PinIcon from "../icons/PinIcon";
import TextHeader from "./TextHeader";
import Card from "./Card";
import LinkedIn from "../icons/LinkedlnIcon";
import TwitterIcon from "../icons/TwitterIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { Link } from "react-router-dom";
const Home = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(new Date());

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  const formatTime = (date) => {
    const days = Math.floor(date.getTime() / (10000000 * 60 * 60 * 24));
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const fullYear = date.getFullYear();

    return { days, hours, minutes, seconds, fullYear };
  };

  if (!currentTime) return null;

  const { days, hours, minutes, seconds } = formatTime(currentTime);
  return (
    <div>
      <div className=" gap-y-4">
        <nav className="  bg-Navbar w-full py-2 flex justify-center items-center fixed z-30">
          <h1 className="text-white text-[1.5625rem] leading-[1.875rem] font-bold text-center font-playfair">
            Business Growth Accelerator
          </h1>
        </nav>

        <div className="flex justify-center items-center py-16 flex-col gap-2">
          <h2 className="text-center font-extrabold text-[30px] text-text font-roboto">
            Become the CHIEF Your Business Needs
            <br />
            And Propel It to Unimaginable Growth
          </h2>

          <p className="font-medium text-[25px] text-red-500 max-md:px-5 max-md:text-center py-1 font-playfair">
            Watch This Now
          </p>

          <div className="animate-bounce">
            <PinIcon />
          </div>
          <video
            width="750"
            height="500"
            controls
            autoPlay
            muted
            className="aspect-video max-md:w-[350px] max-md:h-[200px]"
          >
            <source
              src="/Business Growth ACelerator vsl1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex justify-center items-center ">
          <Head
            src="/books-1.jpg"
            text="15,000"
            subtext="12,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-rgsmig"
            buttontext="Get HardCopy"
          />
          <Head
            src="/books-1.jpg"
            text="5,000"
            subtext="4,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-acnyas"
            buttontext="Get E-book"
          />
        </div>
        <p className="font-medium lg:text-[20px] max-md:text-[10px] text-red-500 max-md:px-5 max-md:text-center py-3 text-center font-roboto">
          Use Promo Code: CHIEF20H for HardCopy and CHIEF20 for E-book at
          checkout to claim your discount.
        </p>
        <div className="bg-[#0177BA] w-full py-8 px-5 flex flex-col gap-4">
          <p className="text-white text-[20px] font-bold py-4 font-roboto">
            {" "}
            Do you dream of a business that not only runs smoothly but also
            grows exponentially, even when you’re not physically present?{" "}
          </p>
          <p className="text-white text-[20px] font-bold font-roboto">
            Are you struggling to find the right strategies to structure,
            stabilize, and scale your operations?{" "}
          </p>
          <p className="text-white text-[20px] font-bold font-roboto">
            The Business Growth Accelerator book is here to transform your
            business from the ground up.
          </p>
          <p className="text-white text-[20px] font-bold font-roboto">
            With this powerful guide, you’ll have the tools to automate,
            streamline, and propel your business to levels of success you never
            imagined possible
          </p>
        </div>
        <div className=" py-3">
          <p className="lg:text-[30px] max-md:text-[15px] font-semibold text-red-500 max-md:px-5 max-md:text-center font-playfair text-center">
            Special Launch Offer: Save 20% Today!
          </p>
          <p className="lg:text-[20px] max-md:text-[10px] font-semibold text-text text-center max-md:px-5 max-md:tex-center font-roboto">
            For a limited time, take advantage of our
            <strong> 20% discount Free Delivery NationWide</strong> on the
            Business Growth Accelerator book. Start transforming your business
            at a reduced price!
          </p>
          <div className="flex justify-center items-center ">
            <Head
              src="/books-1.jpg"
              text="15,000"
              subtext="12,000"
              href="https://paystack.com/buy/business-growth-accelerator-book-rgsmig"
              buttontext="Get HardCopy"
            />
            <Head
              src="/books-1.jpg"
              text="5,000"
              subtext="4,000"
              href="https://paystack.com/buy/business-growth-accelerator-book-acnyas"
              buttontext="Get E-book"
            />
          </div>
          <p className="font-medium lg:text-[20px] max-md:text-[10px] text-red-500 max-md:px-5 max-md:text-center py-3 text-center font-roboto">
            Use Promo Code: CHIEF20H for HardCopy and CHIEF20 for E-book at
            checkout to claim your discount.
          </p>
        </div>
        <div className="py-3 flex justify-center items-center flex-col gap-4 ">
          <h3 className=" font-extrabold lg:text-[30px] max-md:text-[15px] text-red-500 max-md:text-center max-md:px-3 font-playfair">
            Are You Ready to Transform Your Business with the CHIEF Model ?
          </h3>
          <p className="font-medium lg:text-[20px] max-md:text-[12px] text-black max-md:text-center font-roboto">
            Many business owners like you face these critical challenges
          </p>
        </div>
        <div className="lg:px-8 max-md:px-2">
          <TextHeader
            text="High Customer Turnover"
            subtext="Keeping customers engaged and loyal can be a constant battle, leading to missed growth opportunities."
          />
          <TextHeader
            text="Poor Inventory Mgmt"
            subtext="Struggling with excess stock or shortages? Poor inventory management can waste resources and reduce revenue."
          />
          <TextHeader
            text="Financial Uncertainty"
            subtext="Without a clear financial strategy, cash flow issues can threaten your business’s survival."
          />
          <TextHeader
            text="Employee Challenges"
            subtext="Unmotivated teams and high turnover rates can prevent your business from reaching its full potential."
          />
          <TextHeader
            text="External Market Pressures"
            subtext="Navigating competition, regulations, and market changes without a plan can leave your business vulnerable."
          />
          <TextHeader
            text="Overdependence"
            subtext="Business halts without you? Lack of automation limits growth to your availability."
          />
          <TextHeader
            text="Lack of Structure andStability"
            subtext="Without a solid foundation, your business may struggle to grow or even survive in the long term."
          />
        </div>
        <div className="flex justify-center  flex-row gap-12 max-md:px-5">
          <Head
            src="/books-1.jpg"
            text="15,000"
            subtext="12,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-rgsmig"
            buttontext="Get HardCopy"
          />
          <Head
            src="/books-1.jpg"
            text="5,000"
            subtext="4,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-acnyas"
            buttontext="Get E-book"
          />
        </div>
        <div className="flex  justify-center flex-row gap-5 max-md:px-5">
          <p className=" max-md:px-3 text-text font-medium lg:text-[25px]  max-md:text-[14.5px] font-playfair">
            +Free Nationwide delivery
            <br /> +Free Instant BGA Ebook
            <br /> + Use Promo code CHIEF20H
            <br /> to get instant 20% Discount
            <br /> Regular Price: N15,000 <br />
            With Promo Code N12,000
          </p>
          <p className=" text-text font-medium lg:text-[25px]  max-md:text-[14.5px] font-playfair pl-12">
            Instant Access in your <br />
            Email Use Promo code CHIEF20 <br /> to get instant 20% Discount
            <br />
            Regular Price: N5,000 <br /> With Promo Code N4,000 <br /> NB: Promo
            Runs till 30th Nov. 2024
          </p>
        </div>
        <p className="font-medium lg:text-[20px] max-md:text-[10px] text-red-500 max-md:px-5 max-md:text-center py-3 text-center font-roboto">
          Use Promo Code: CHIEF20H for HardCopy and CHIEF20 for E-book at
          checkout to claim your discount. NB: Promo Runs till 30th Nov. 2024
        </p>
        <div className="bg-gray w-full py-5 flex-col max-md:gap-3 px-2">
          <h3 className="text-red-500 font-bold lg:text-[30px] max-md:text-[20px] flex justify-center text-center items-center font-playfair">
            How the Business Growth Accelerator Solves These Challenges
          </h3>
          <p className="text-black font-medium lg:text-[20px] max-md:text-[10px] text-center lg:px-20 max-md:px-5 max-md:py-3 flex justify-center items-center font-roboto">
            The Business Growth Accelerator book leverages the CHIEF model to
            address these pain points, empowering you to lead your business to
            success even from a distance
          </p>
          <div className="">
            <TextHeader
              text="Customer-Management"
              subtext="Develop strategies to attract and keep customers, growing your base for consistent revenue with less oversight."
            />
            <TextHeader
              text="Human Resources"
              subtext="Develop a motivated, productive team aligned with your goals to keep your business running smoothly when you're away"
            />
            <TextHeader
              text="Inventory Mgmt"
              subtext="Gain control over your inventory to ensure stock levels, minimize waste, and maximize profit by automating processes."
            />
            <TextHeader
              text="External Factors Mgmt"
              subtext="Adopt strategies to navigate market shifts, competition, and regulations, ensuring business resilience."
            />
            <TextHeader
              text="Financial Management"
              subtext="Master finances with effective budgeting and cash flow strategies to ensure business health with less oversight."
            />
          </div>
        </div>
        <div className="w-full bg-limered py-8 rounded-br-[20px] justify-between gap-8 items-center rounded-bl-[20px] rounded-tr-[20px] lg:px-12 px-6 flex max-md:gap-2 lg:justify-between rounded-tl-[20px]">
          <h2 className="font-semibold lg:text-[24px] max-md:text-[12px] max-md:leading-[15px] lg:leading-[30.24px] text-lightred">
            Order Deadline:
          </h2>

          <div className="flex flex-col">
            <span className="font-extrabold lg:text-[40px] max-md:text-[20px] lg:leading-[50.4px] max-md:leading-[25px] text-center">
              {days}
            </span>
            <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
              Days
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold max-md:text-[20px] lg:text-[40px] max-md:leading-[25px]  lg:leading-[50.4px] text-center">
              {hours}
            </span>
            <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
              Hours
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold lg:text-[40px] max-md:leading-[25px] max-md:text-[20px] lg:leading-[50.4px] text-center">
              {minutes}
            </span>
            <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
              Minutes
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold lg:text-[40px] max-md:leading-[25px] lg:leading-[50.4px] max-md:text-[20px] text-center">
              {seconds}
            </span>
            <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
              Seconds
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Head
            src="/books-1.jpg"
            text="15,000"
            subtext="12,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-rgsmig"
            buttontext="Get HardCopy"
          />
          <Head
            src="/books-1.jpg"
            text="5,000"
            subtext="4,000"
            href="https://paystack.com/buy/business-growth-accelerator-book-acnyas"
            buttontext="Get E-book"
          />
        </div>
        <p className="font-medium lg:text-[20px] max-md:text-[10px] text-red-500 max-md:px-5 max-md:text-center py-3 text-center font-roboto">
          Use Promo Code: CHIEF20H for HardCopy and CHIEF20 for E-book at
          checkout to claim your discount.
        </p>
        <div className="lg:px-5 max-md:px-2 py-5 flex flex-col gap-3">
          <h3 className="text-red-500 font-bold lg:text-[30px] max-md:text-[15px] font-playfair">
            What’s Inside the Book
          </h3>
          <div className="">
            <TextHeader
              text="Structure Stability"
              subtext="Learn how to build a solid business foundation that supports growth and scalability."
            />
            <TextHeader
              text="Automation Strategies"
              subtext="Set up systems that allow your business to operate and grow without your day-to-day involvement."
            />
            <TextHeader
              text="Practical Solutions"
              subtext="Step-by-step guidance on how to apply the CHIEF model to your business."
            />
            <TextHeader
              text="Case Studies"
              subtext="Real-world examples of businesses that have successfully automated, structured, and scaled using these strategies"
            />
            <TextHeader
              text="Hands-On Tools"
              subtext="Worksheets and templates to help you implement the strategies and track your progress."
            />
            <TextHeader
              text="Bonus Material"
              subtext="Early buyers receive an exclusive chapter on advanced automation tactics and growth strategies."
            />
          </div>
        </div>
        <div className="py-4 px-5">
          <p className="lg:text-[30px] max-md:text-[15px] font-semibold text-red-500 max-md:px-5 max-md:text-center font-playfair text-center">
            Special Launch Offer: Save 20% Today!
          </p>
          <p className="lg:text-[20px] max-md:text-[10px] font-semibold text-text text-center max-md:px-5 max-md:tex-center font-roboto">
            For a limited time, take advantage of our
            <strong> 20% discount Free Delivery NationWide</strong> on the
            Business Growth Accelerator book. Start transforming your business
            at a reduced price!
          </p>
          <div className="flex justify-center  flex-row gap-12">
            <Head
              src="/books-1.jpg"
              text="15,000"
              subtext="12,000"
              href="https://paystack.com/buy/business-growth-accelerator-book-rgsmig"
              buttontext="Get HardCopy"
            />
            <Head
              src="/books-1.jpg"
              text="5,000"
              subtext="4,000"
              href="https://paystack.com/buy/business-growth-accelerator-book-acnyas"
              buttontext="Get E-book"
            />
          </div>
        </div>
        <div className="bg-gray w-full py-5 px-5">
          <h5 className="font-bold text-[30px] text-Darkblue flex justify-center items-center">
            About The Author
          </h5>
          <div className="bg-transparent drop-shadow-lg w-full rounded-md py-3 px-5 flex lg:justify-between max-md:flex-col gap-4">
            <img
              src="/DAN_7400.jpg"
              height={360}
              width={360}
              alt=""
              className="rounded-[4px]"
            />
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[25px] "> Emeka Ezeifeka</p>
              <p className="text-[#3C3C43] leading-6">
                Emeka Ezeifeka is a versatile professional with expertise as a
                Pharmacist, Project Manager, Entrepreneur, and Business and
                Career Coach. He founded Rayzer Healthcare Ltd, providing
                pharmaceutical supplies in Nigeria, and Rayzer Business
                Technologies, offering business growth courses. Emeka authored
                Profitable Pharmacy Business Blueprint and developed the
                Wizebook Inventory and Financial Management Software. He also
                founded Graduate Workforce Solution, connecting university
                graduates with SMEs to build essential business skills. With a
                Pharmacy degree from Madonna University and various
                certifications, Emeka is dedicated to innovation and workforce
                development. He is married to Chinelo Ezeifeka, and they have
                three children.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

const Head = ({ text, subtext, src, href = "", buttontext }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img alt="Descriptive Alt Text" height={300} width={300} src={src} />
      <div className="flex flex-row items-center gap-2">
        <p className="lg:text-[25px] max-md:text-[17px] font-medium font-playfair">
          RegularPrice:
        </p>
        <p className="line-through text-red-500 lg:text-[25px] max-md:text-[17px] font-medium font-playfair">
          {text}
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <p className="lg:text-[25px] max-md:text-[17px] font-medium font-playfair">
          PromoPrice:
        </p>
        <p className="lg:text-[25px] max-md:text-[17px] font-medium font-playfair">
          {subtext}
        </p>
      </div>
      <a
        href={href}
        className="border-white border bg-Navbar w-[150px] h-10 text-center flex justify-center items-center text-white text-[15px] font-medium py-5 rounded-[10px]"
      >
        {" "}
        {buttontext}
      </a>
    </div>
  );
};

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(new Date());

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  const formatTime = (date) => {
    const fullYear = date.getFullYear();

    return { fullYear };
  };

  if (!currentTime) return null;

  const { fullYear } = formatTime(currentTime);

  return (
    <div>
      <footer className="bg-Darkblue w-full py-5 px-5  flex-col gap-4">
        <h5 className="font-bold text-[30px] max-md:text-center text-white flex justify-center items-center">
          What Entrepreneurs Are Saying
        </h5>
        <div className="grid lg:grid-cols-2  max-md:flex place-items-center  max-md:flex-col gap-4 pt-12 ">
          <Card
            imageSrc="/kelechi.jpg"
            name=" Mrs Kelechi."
            title="Pharmacist
"
            description={`I was skeptical at first, but after reading Business Growth 
              Accelerator, I’m seeing real results in my business. The structure 
              and automation tips alone have been worth the price!`}
            rating={5}
          />
          <Card
            imageSrc="/image.jpg"
            name="Musa Tijani."
            title="CEO ORIONINC.SERV
"
            description={`I had my doubts initially, but after diving into Business Growth 
              Accelerator, the impact on my business has been incredible. 
              The strategies for structure and automation alone have proven 
              invaluable, making the investment more than worth it!`}
            rating={5}
          />
        </div>
        <div className="py-8">
          <p className="text-white font-bold text-[30px]">
            Act Now—This Offer Won’t Last!
          </p>
          <p className="text-wrap text-white text-[20px] font-medium">
            Don’t miss this opportunity to structure, stabilize, automate,
            <br /> and propel your business to unimaginable growth. Use the
            <br />
            promo code today and start your journey to business
            <br /> success—even when you’re not physically present.
          </p>
          <p className="text-white font-medium text-[20px]">
            Get the Ebook for N5,000 (N4,000 with Promo Code)(CHIEF20)
            (CHIEF20H) <br />
            Order the Hard Copy for N15,000 (N12,000 with Promo Code)
            <br /> and E-Book (N4,000 with Promo Code)
          </p>
        </div>
        <div className="flex justify-center items-center py-8 flex-col gap-4">
          <p className="text-white font-medium text-[20px] max-md:text-center">
            Need help or have questions? Contact us at
          </p>
          <p className="text-white font-medium text-[20px]">
            rayzerbtech@gmail.com
          </p>
          <p className="text-white font-medium text-[20px]">09041977477</p>
          <div className="flex flex-row items-center gap-4">
            <LinkedIn href="https://www.linkedin.com/company/104648274/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BI1bo0sZVQd2gvKaagcTQmQ%3D%3D" />
            <TwitterIcon href="https://x.com/Rayzer_Business?fbclid=IwY2xjawE-pMBleHRuA2FlbQIxMAABHdxRu7r1rF0KC2dxcZhtDOQCAObY9DdTY88M8RdGBZHC7y5y3zbMAXIiew_aem_ecq9ysjdVVtmx8N31gsMAg" />
            <InstagramIcon href="https://www.instagram.com/rayzer_business?fbclid=IwY2xjawE-pKxleHRuA2FlbQIxMAABHdxRu7r1rF0KC2dxcZhtDOQCAObY9DdTY88M8RdGBZHC7y5y3zbMAXIiew_aem_ecq9ysjdVVtmx8N31gsMAg#" />
            <FacebookIcon href="https://web.facebook.com/Rayzerbusinesswizebook" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <Link to="/privacy" className="text-white underline">
            PrivacyPolicy
          </Link>
          <Link to="/policy" className="text-white underline">
            Terms and conditions
          </Link>
        </div>
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className="text-white max-md:text-center">
            &copy; {fullYear} All rights Reserved from Rayzer Business
            Technologies
          </div>
        </div>
      </footer>
    </div>
  );
};
