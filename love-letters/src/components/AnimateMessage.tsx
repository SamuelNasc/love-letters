import { motion } from "framer-motion"

function AnimateMessage({children}){

    return(
        <span>
            {children.split('').map((char, index) => (
                <motion.span
                    key={char + '-' + index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: index / 10
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
}

export default AnimateMessage
