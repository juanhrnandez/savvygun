import { motion } from "framer-motion";

const DonwAnimation = (props) => {
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          y: "-100%",
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: props.delay,
            duration: props.duration,
          },
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default DonwAnimation;
