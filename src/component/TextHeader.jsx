import ChexkIcon from "../icons/CheckIcon";
const TextHeader = ({ text, subtext }) => {
  return (
    <div className="flex  flex-row lg:gap-2 max-md:gap-1 lg:items-center">
      <ChexkIcon />
      <p className="font-medium lg:text-[22px] max-md:text-[12px] max-md:whitespace-nowrap text-text font-playfair">
        {text}:
      </p>{" "}
      <p className="font-normal lg:text-[20px] max-md:text-[10px] text-text font-playfair">
        {" "}
        {subtext}
      </p>
    </div>
  );
};

export default TextHeader;
