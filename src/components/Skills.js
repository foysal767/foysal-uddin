import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark dark:shadow-light py-3 px-6 cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition:{ duration: 1.5 }}}
        viewport={{once:true}}
    >{name}</motion.div>
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl md:text-6xl mt-64 md:mt-32 w-full text-center'>Skills</h2>
            <div className='w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark dark:shadow-light p-8 cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3'
                    whileHover={{ scale: 1.05 }}
                >web</motion.div>
                <Skill name="HTML" x='-21vw' y="2vw"/>
                <Skill name="CSS" x='-5vw' y="-12vw"/>
                <Skill name="JavaScript" x='18vw' y="6vw"/>
                <Skill name="ReactJs" x='0vw' y="12vw"/>
                <Skill name="NextJs" x='-23vw' y="-15vw"/>
                <Skill name="GatsByJs" x='18vw' y="-12vw"/>
                <Skill name="Web Design" x='34vw' y="-5vw"/>
                <Skill name="Figma" x='0vw' y="-20vw"/>
                <Skill name="Firebase" x='-25vw' y="15vw"/>
                <Skill name="Tailwind CSS" x='18vw' y="18vw"/>
            </div>
        </>
    )
}

export default Skills