import logo from './logo.svg';
import './App.css';
import CountdownTimer from './timer';
import { useState ,useRef, useEffect } from 'react';
import { motion ,AnimatePresence ,useTransform } from 'framer-motion';
function App() {
  const elementRef = useRef(null);
  
  const [Xpos,setXpos]=useState(0);
  const [Ypos,setYpos]=useState(0);
  const [indexx,setIndex]=useState(0);
  
    const getPosfn=()=>{
      const rect = elementRef?.current?.getBoundingClientRect();
      setXpos(rect.x+50);
      setYpos(rect.y);
    }
   
    const [count, setCount] = useState(0);
 
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the count every 1 second
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 2000);
    getPosfn();
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
   
   const colors=[
    "rgba(255, 57, 229, 0.2)",' rgba(255, 199, 57, 0.2)','rgba(255, 250, 239, 0.2)'
   ]
   const colors2=[
    "rgba(255, 57, 229, 1)",'rgba(255, 199, 57, 1)','rgba(255, 250, 239, 1)'
   ]
   const img=[
    "https://gartcod.cloud/_next/static/media/mobile.548cdf6e.svg",
    "https://gartcod.cloud/_next/static/media/chrome.db58996d.svg",
   
    "https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg"
   ]
   const [color ,setColor]=useState(colors[indexx]);
   const [color2 ,setColor2]=useState(colors2[indexx]);
  return (
    <motion.div className="App   h-screen" style={{backgroundImage:'url("https://gartcod.cloud/_next/static/media/gradient.e25977d1.svg")', backgroundColor:colors[count] ,backgroundSize: 'cover', transition:"background-color 0.3s ease" }} >
    <div class="fixed inset-0 opacity-30" style={{backgroundSize:"30px",backgroundImage:'url("https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8997f779f33b430bb22ca667d1b73ade")'}}></div>
    
     <motion.div className=' fixed z-20 ' initial={{ x:[0 ,0] ,y:[0, 0]}} animate={{x:[0 ,Xpos ,Xpos ,3000], y:[0 ,Ypos, Ypos+135, -1000] }}  transition={{ duration:4, times: [0, 0.25, 0.75, 1] }}>
  <img src ="https://gartcod.cloud/_next/static/media/designer.cf165e6f.svg"></img></motion.div>
  <img role="presentation" alt="gradient background" loading="lazy" width="1200" height="1200" decoding="async" data-nimg="1" className=' -z-20' class="fixed inset-0 w-screen h-screen object-cover" style={{color:"transparent" }} src="https://gartcod.cloud/_next/static/media/gradient.e25977d1.svg"/>
     <div className=' flex  flex-col items-center z-10'>
      <div className=' flex mt-20  justify-center text-center items-center gap-3  flex-wrap z-10'>
        <img  src='https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgartcod-without-bg.33aa91c5.png&w=128&q=75'></img>
        <h1 className=' text-white z-10 text-7xl font-extrabold mx-auto' >for </h1>
        <div><AnimatePresence mode='wait'><motion.img  key={count} initial={{ opacity:0, y:10}} animate={{ opacity:1, y:0}} exit={ {  opacity:0, y:-10}} transition={{ duration:"0.1"}}  className=' w-14 z-10' src={img[count]} /></AnimatePresence></div>
        <h1 className=' text-7xl z-10 font-extrabold' style={{color:colors2[count], transition:"color 0.3s ease"  }} >& </h1>
        <h1 className=' text-7xl font-extrabold mx-auto z-10' style={{color:colors2[count]  , transition:"color 0.3s ease" }} > Cloud</h1>
        
      </div>
      <motion.h1 className=' text-white text-7xl font-extrabold z-10' style={{color:colors2[count] , transition:"color 0.3s ease"  }} transition={{ duration:0.5}} >gaming</motion.h1>
      <div className=' flex items-center py-14 z-10'>
      <h1 className=' text-white/80 text-sm font-medium z-10' >Join us on the launch of gartcod by</h1>
      <img src='https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprovoke_logo.d9109ac6.png&w=64&q=75'></img>
      </div>
       <div>
        <CountdownTimer color={colors2[count]}  targetDate={ new Date('January 31, 2024 23:59:59')}/>
       </div>
       <motion.button initial={{ y:-130}} animate={{ y:0}} transition={{ duration: 2 ,delay:1}} ref={elementRef} className=' mt-5 px-5 py-2.5 z-10 rounded-md font-medium' style={{backgroundColor:colors2[count] ,transition:"color 0.3s ease"}}  >Claim Ticket</motion.button>
     </div>
    </motion.div>
  );
}

export default App;
