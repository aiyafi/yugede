"use client";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import { BoxReveal } from "./ui/box-reveal";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-neutral-200 dark:border-white/[0.2] rounded-xl overflow-hidden bg-white dark:bg-black mb-4 shadow-input dark:shadow-primary/20 transition-all duration-200 hover:shadow-lg"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h3 className="text-sm md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-neutral-500"
        >
          <IconChevronDown size={20} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-neutral-600 dark:text-neutral-400 md:text-sm text-xs bg-neutral-50 dark:bg-neutral-900/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -400px 0px",
  });

  return (
    <div
      className="pb-48 px-4 max-w-5xl mx-auto min-h-screen"
      id="faq"
      ref={containerRef}
    >
        <div className="flex flex-col items-center">
      <BoxReveal>
        <h2 className="mx-auto text-3xl md:text-7xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-bl from-primary to-primary-foreground">
          FAQ
        </h2>
      </BoxReveal>
      </div>
      <p className="text-sm md:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 mx-auto">
        Lorem ipsum dolor sit amet
      </p>

      <div className="space-y-2 md:space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.15, // Sequential delay based on item index
                      ease: [0.22, 1, 0.36, 1], // Custom spring-like easing
                    },
                  }
                : {}
            }
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Consectetur adipiscing elit sed do eiusmod?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Tempor incididunt ut labore et dolore?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Magna aliqua ut enim ad minim veniam?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Quis nostrud exercitation ullamco laboris?",
    answer: (
      <div className="space-y-2">
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.
        </p>
      </div>
    ),
  },
  {
    question: "Nisi ut aliquip ex ea commodo consequat?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Qui officia deserunt mollit anim id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
];