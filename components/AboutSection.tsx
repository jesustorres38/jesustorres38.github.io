import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "GIT" },
  { skill: "Github" },
  { skill: "Bitbucket" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Nodejs" },
  { skill: "Jest" },
  { skill: "React testing library" },
  { skill: "Gatsby" },
  { skill: "Mobx" },
  { skill: "Jenkins" },
  { skill: "Microfrontends" },
  { skill: "Single spa" }
]

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-violet-600 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              More about me!
            </h1>
            <p>
              Hi, my name is Jesus and I am a software engineer based in
              Barcelona, Spain.
            </p>
            <br />
            <p>
              I graduated in computer engineering in 2015 and since then I have
              worked on a long list of projects, teams and technologies.
            </p>
            <br />
            <p>
              I really like sports and I try to combine my hobbies with software
              development by creating personal applications that I can use in my
              daily life. This helps me to continue learning constantly and at
              the same time have some fun.
            </p>
            <br />
            <p>
              I prefer to work in a team but I adapt to any work environment. My
              main goal is to satisfy the end customer and be proud of my work.
              🙂
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>Daily use tools</h1>
            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 hover:bg-violet-600 hover:text-white rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
