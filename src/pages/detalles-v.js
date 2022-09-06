import { motion } from "framer-motion";
export default function Detalles() {
  return (
    <div className="bg-white dark:bg-gris">
      <motion.div
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 1000, scale: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-screen w-full bg-amarillo  "
      >
       
      </motion.div>
      </div>
  );
}
