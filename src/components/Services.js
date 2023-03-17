import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-cl lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[445px] mb-16">
              I am a recent Website design and development student looking to
              pursue a career as a front-end developer
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] bm-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
