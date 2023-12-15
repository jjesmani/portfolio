import React from "react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  icon: React.ElementType;
  text: string;
  iconSize?: string;
  hoverColor?: string;
  animationType?: string;
  className?: string;
}

const Icons: React.FC<IconProps> = ({
  icon: Icon,
  text,
  iconSize = "5xl",
  hoverColor = "hover:text-zinc-800",
  animationType = "hover:scale-125",
  className = "",
}) => {
  const containerClasses = twMerge(
    `flex flex-col text-center items-center w-[10ch] gap-4 transition-all duration-300 ease-in-out hover:text-zinc-800 ${className}`
  );
  const iconClasses = twMerge(
    `flex items-center justify-center text-${iconSize} mb-3 ${hoverColor} ${animationType} transition-all duration-500 ease-in-out text-zinc-500`
  );

  return (
    <div className={containerClasses}>
      <div className={iconClasses}>{Icon && <Icon />}</div>
      {text}
    </div>
  );
};

export default Icons;
