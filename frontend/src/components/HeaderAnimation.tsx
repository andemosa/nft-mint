"use client";

import { motion } from "motion/react";
import { Fragment } from "react";

export default function HeaderAnimation({
  text,
  className,
  initial,
}: {
  text: string;
  initial?: boolean;
  className?: string;
}) {
  const textSplitter = text.split("<br />");

  return textSplitter.map((part, partIndex) => (
    <Fragment key={partIndex}>
      {part.split("").map((letter, index) => (
        <motion.span
          key={index}
          whileInView={{
            color: initial ? "#ffffff" : "#1D3557",
          }}
          initial={{ color: initial ? "#1D3557" : "#ffffff" }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className="text-4xl md:text-6xl leading-[1.2] font-bold mb-4"
        >
          {letter}
        </motion.span>
      ))}

      {partIndex < text.split("<br />").length - 1 && (
        <br key={partIndex} className={`${className ? className : ""}`} />
      )}
    </Fragment>
  ));
}
