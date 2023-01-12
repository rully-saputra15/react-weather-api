import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { verticalFadeInVariant } from "../constants/animation.js";

const VerticalFadeInComponent = ({children}) => {
  return (
    <AnimatePresence>
      <motion.div variants={verticalFadeInVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    type: "spring",
                    duration: 0.2,
                    stiffness: 150
                  }}>
        {children}
      </motion.div>

    </AnimatePresence>
  )
}

export default VerticalFadeInComponent;
