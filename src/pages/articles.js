import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'

import TransitionEffect from '@/components/TransitionEffect'
import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

const FramerImage = motion(Image);

const FeaturedArticle = ({img,title,time,summary,link}) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg inline-block'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
            </Link>
        </li>
    )
}

const Article = ({img,title,date,link}) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col'
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once:true}}
        >
            <MovingImage
                title={title}
                img={img}
                link={link}
            />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 sm:self-start xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const MovingImage = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imageRef = useRef(null);
    function handleMouse(e) {
        imageRef.current.style.display = "inline-block";
        x.set(e.pageX);
        y.set(-10);
    }
    function handleMouseLeave(e) {
        imageRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }
    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-lg font-semibold hover:underline'>{title}</h2>
            <FramerImage ref={imageRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
                style={{ x: x, y: y }}
                initial={{opacity:0}}
                whileInView={{ opacity:1, transition:{duration:0.2}}}
            />
        </Link>
    )
}
const articles = () => {
  return (
      <>
        <Head>
            <title>Ariful islam | Articles page</title>
            <meta name='description' content='my content'/>
          </Head>
          <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
              <Layout className='pt-16'>
                  <AnimatedText text="Words Can Change The World!" className='!text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl mb-16 sm:mb-8'/>
                  <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                      <FeaturedArticle
                          img={article1}
                          title={"Build A Custom Pagination Component In Reactjs From Scratch"}
                          time={"9 min read"}
                          summary={"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                          link={"/"}
                      />
                      <FeaturedArticle
                          img={article2}
                          title={"Build A Custom Pagination Component In Reactjs From Scratch"}
                          time={"9 min read"}
                          summary={"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                          link={"/"}
                      />
                  </ul>
                  <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                  <ul>
                      <Article
                          title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                          img={article3}
                          date={"March 22, 2023"}
                          link={'/'}
                      />
                      <Article
                          title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                          img={article3}
                          date={"March 22, 2023"}
                          link={'/'}
                      />
                      <Article
                          title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                          img={article3}
                          date={"March 22, 2023"}
                          link={'/'}
                      />
                      <Article
                          title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                          img={article3}
                          date={"March 22, 2023"}
                          link={'/'}
                      />
                  </ul>
            </Layout>
        </main>
      </>
  )
}

export default articles