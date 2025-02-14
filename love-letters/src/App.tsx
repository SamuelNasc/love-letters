import { motion } from 'framer-motion' 
import { useMemo, useState, useRef } from 'react'
import AnimateMessage from './components/AnimateMessage';
import Letter from './components/Letter';
import FloatingItensInBackground from './components/FloatingItensInBackground';

const ADJECTIVES = [
  "Linda",
  "Perfeita",
  "Maravilhosa",
  "Cheirosa",
  "Incrível",
  "Inteligente",
  "Mais do que eu poderia pedir",
  "Bonita",
  "Minha Miudinha",
  "Extraordinária",
  "O amor da minha vida",
  "O meu amor",
  "Especial",
  "Batalhadora",
  "Tudo de bom",
  "Gata",
  "Melhor namorada do mundo",
  "Fofa",
  "O meu sonho"
];


const MESSAGES = [
  "Eu te amo, meu amor",
  "Sou muito sortudo por ter você",
  "Espero envelhecer com você ao meu lado",
  "Amo seus olhos",
  "Você tem um sorriso lindo",
  "Estou apaixonado desde quando você colocou aquela pipoca na minha boca",
  "Obrigado por melhorar os meus dias",
  "Você tem belas bochechas",
  "Amo o seu bolo de cenoura",
  "Você faz o melhor risoto",
  "Te amo, minha miudinha",
  "Te amo, minha gatinha",
  "Você é o meu presente de Deus",
  "Acho incrível o quanto você é batalhadora",
  "Você é linda",
  "Os melhores perfumes estão nos menores frascos",
  "Quero ter você sempre ao meu lado",
  "Você tem olhos lindos",
  "Acho incrível o quanto você é comprometida",
  "Você me ensina todos os dias a ser uma pessoa melhor",
  "Você me ensina a estar mais perto de Deus",
  "Obrigado por ser essa pessoa incrível",
  "Obrigado por ser a melhor namorada do mundo",
  "Você cozinha muito bem",
  "Me impressiono com o quanto você se esforça",
  "Você é demais, gatinha",
  "Amo o seu abraço",
  "Você é o meu sonho que se tornou realidade",
  "Você é muito fofinha",
  "Sou apaixonado pela minha miudinha",
  "A cada dia que se passa, mais eu percebo o quão bela você é",
  "Quero você",
  "Te amo tanto que vou te lembrar de beber água",
  "Você torna meus dias especiais",
  "Não vejo a hora de estar todos os dias ao seu lado",
  "Você é demais, gatinha",
  "Eu te amo",
  "Agradeço a Deus por ter você",
  "Você é muito fofinha",
  "Você é muito fofinha pra ficar brava",
  "Quero a minha miudinha"
];


function App() {
  const [message, setMessage] = useState<string>('')

  const adjective:string = useMemo(()=> {
    return ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
  }, [])

  const audioRef = useRef(new Audio('button-click-arcade-sound.wav'))

  function onNewMessageClick(){
    const newMessage = getNewMessage()
    setMessage(newMessage)
    audioRef.current.play()
  }

  function getNewMessage():string{
    const message:string = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
    return message
  }

  return (
    <section className='h-screen w-full flex flex-col p-4 py-6 gap-10'>
      <FloatingItensInBackground item={'🍓'}/>
      <div className='mx-auto'>
        <h1 className='text-center text-2xl text-love-red font-extrabold mb-6 font-playfair-display'>💌 Cartas para a Miudinha 💌</h1>
        <p className='text-center text-2xl font-playfair-display'>Você é <span className='font-bold text-love-red text-3xl font-great-vibes'><AnimateMessage message={adjective}/></span></p>
      </div>
      
      <div className='flex flex-col mx-auto gap-10'>
        <Letter message={message}/>

        <motion.button
          className='bg-love-red rounded-xl text-white p-2 w-96 mx-auto font-playfair-display'
          whileTap={{ scale: 0.85}}
          onClick={() => onNewMessageClick()}
        >
          Abrir Mensagem
        </motion.button>
      </div>

    </section>
  )
}

export default App
