import { motion } from "framer-motion"

export const GameCover = ({ background_image = ""}) => {
    return (
        <motion.div
            className="Image"
            whileHover={{ height: 180}}
            style={{ backgroundImage: `url(${background_image})` }}
        >            
        </motion.div>
    )
}