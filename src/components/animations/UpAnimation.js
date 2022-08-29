import { motion } from "framer-motion";

const UpAnimation = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      animate="show"
      viewport={{ once: true }}
      transition={{ duration: 1, delay:props.delay, ype: "spring", mass: 0.5,  }}
      variants={{
        visible: { opacity: 1,  y: 0, x:0, scale: 1},
        hidden: { opacity: props.opacity,  y: props.Y, x:props.X, scale:props.scale},
      }}
      exit={{ opacity: 0 , y: -300, delay:props.delay}}
    >
      {props.children}
    </motion.div>
  );
};

export default UpAnimation;
