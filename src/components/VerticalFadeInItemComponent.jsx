import { motion } from "framer-motion";
import { verticalFadeInVariantItem } from "../constants/animation.js";

const VerticalFadeInItemComponent = ({children}) => {
  return (
    <motion.div variants={verticalFadeInVariantItem}
                layout
                whileHover={{ scale: 1}}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  stiffness: 150
                }}>
      {children}
    </motion.div>

  )
}

export default VerticalFadeInItemComponent;
