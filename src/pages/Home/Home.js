//css
import './Home.css'

//Hooks
import {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion';

//imagens
import img1 from '../../images/andrzj-brown-U0qJT3ynHOE-unsplash.jpg'
import img2 from '../../images/bianca-ackermann-mTNVvQvmoKs-unsplash.jpg'
import img3 from '../../images/danika-perkinson-ZhA9vZQPTeE-unsplash.jpg'
import img4 from '../../images/klara-avsenik-5cFqO92t7pM-unsplash.jpg'

const images = [img1, img2, img3, img4]


const Home = () => {

    const carousel = useRef();
    const [width, setWidth] = useState (0)

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[]);


    return ( 
        
        <div className='AmostraDeProdutos'>
           
            <h1 className='AmostraDeProdutos__titlo'>Amostra de produtos</h1>
                   
                    <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                        <motion.div className='inner' drag="x" dragConstraints={{right: 0, left: -width}} initial={{x: 200}} animate={{x: 0}} transition={{duration: 0.8}}>

                            {images.map(image =>(
                                <motion.div className='item' key={image}>
                                <img src={image} alt='Texto Alternativo'/>
                                </motion.div>))}

                        </motion.div>
                    </motion.div>
        </div>
     );
}
 
export default Home;