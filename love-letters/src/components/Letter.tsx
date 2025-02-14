import AnimateMessage from "./AnimateMessage"

interface LetterProps{
    message: string
}

function Letter({message} : Readonly<LetterProps>){
    return(
        <div className='mx-auto bg-love-red min-h-96 w-96 rounded-xl ring-1 ring-love-red shadow-[0_0_30px_#ff4d4d] flex flex-justify items-center p-4 '>
            <span className='text-7xl text-center text-white font-bold font-great-vibes'>
                <AnimateMessage message={message}/>
            </span>
        </div>
    )
}

export default Letter