import { motion } from "framer-motion"

const ITENS_COUNT = 15

interface FloatingItensBackgroundProps{
    item: string
}

function FloatingItensInBackground({item}: Readonly<FloatingItensBackgroundProps>){
    const itens = Array.from({ length: ITENS_COUNT });
    return(
        <div className='absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-ligth-rose'>
            
            {itens.map((_, index) => {
                const startX = Math.random() * 100
                const delay = Math.random() * 5
                const duration = Math.random() * 6 + 4
                const size = Math.random() * 30 + 10

                return(
                    <motion.div 
                        key={index}
                        className='absolute text-love-red'
                        initial={{ opacity:0, y: "100vh", x: `${startX}vw`}}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            y: ['100vh', '-10vh']
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: 'easeInOut',
                        }}
                        style={{ fontSize: `${size}px`, left: `${startX}vw` }}
                    >
                        {item}
                    </motion.div>
                )
            })}
            

        </div>
    )
}

export default FloatingItensInBackground