"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] md:h-screen w-full bg-white dark:bg-black",
        className
      )}
    >
      <SVG svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  // Optimized with fewer paths for better performance
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489",
    "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784",
    "M720 450C720 450 738.983 448.651 790.209 446.852C841.436 445.052 816.31 441.421 861.866 437.296",
    "M720 450C720 450 696.366 458.841 682.407 472.967C668.448 487.093 673.23 487.471 647.919 492.882",
    "M720 450C720 450 727.941 430.821 734.406 379.251C740.87 327.681 742.857 359.402 757.864 309.798",
    "M720 450C720 450 722.468 499.363 726.104 520.449C729.739 541.535 730.644 550.025 738.836 589.07",


    "M720 450C720 450 730.571 424.312 761.424 411.44C792.277 398.569 772.385 393.283 804.069 377.232",
  ];

  const colors = [
    "#46A5CA",
    "#8C2F2F",
    "#4FAE4D",
    "#D6590C",
    "#811010",
    "#247AFB",
    "#A534A0",
    "#A8A438",
    "#D6590C",
    "#46A29C",
    "#670F6D",
    "#D7C200",
    "#59BBEB",
    "#504F1C",
    "#55BC54",
    "#4D3568",
    "#9F39A5",
    "#363636",
    "#860909",
    "#6A286F",
    "#604483",
  ];
  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-first-${idx}`}
        />
      ))}

      {/* duplicate for more paths */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-second-${idx}`}
        />
      ))}
    </motion.svg>
  );
};
