import { motion } from "framer-motion"


const Description = ( ) => {
  return (
    <div className=' w-[min(2200px,75%)] mx-auto'>
      <div className='flex space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: false }} className='relative'>
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 0.4, delay: 0.6 }} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#e0413e]" ></motion.div>
        </div>
        <div className='md:w-10/12 mb-24'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} viewport={{ once: false }} className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '200ms' }}>ABOUT AI & NLP CLUB</motion.div>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
            <span className="text-[#d1623d]"></span>
          </motion.h3>
        </div>
      </div>
      <div className='flex justify-between items-center md:space-x-10 max-md:flex-col ml-auto'>

        <div className='w-full md:w-1/4 flex justify-center'>
          <img className='object-cover object-center w-full max-w-xs md:max-w-full h-auto rounded-xl' src='/images/ai-nlp-aboutus.jpg' alt='About Us Image' />
        </div>


        <div className='w-full md:w-2/3 border rounded-xl border-transparent flex justify-center items-center bg-[#161b22] lg:pl-8 lg:pr-8 lg:py-8 sm:p-10 p-8'>
          <p className='text-sm lg:text-base lg:leading-7 mb-7 text-center lg:text-left font-medium text-[#7d8590]'>
            Artificial Intelligence and Natural Language Processing (AI & NLP) is a club of NIT Trichy launched in 2018, initiated by the students of CA department under the guidance of Dr. S. Sangeetha. We welcome everyone to explore the emerging world of Artificial Intelligence along with its branch of Natural Language Processing. This club provides an opportunity for students to connect with the technologies of artificial intelligence by building up their skills in Natural Language Processing (NLP), machine learning (ML), etc., and learn about creating systems that read, decipher, understand, and make sense of human languages in a valuable manner.
          </p>
        </div>

      </div>

    </div>
  )
};


const About = ( ) => {

  return (
    <div className=' w-[100%] lg:pt-10 md:px-10 mx-auto pt-8 	'>


      <Description></Description>

    </div>

  );
};

export default About;
