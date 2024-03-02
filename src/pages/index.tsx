import { Badge } from '@/components/Badge'
import { SKILLS } from '@/constants/main'
import { Figtree } from 'next/font/google'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const poppins = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
  return (
    <main
      className={`text-light-100 flex justify-center items-start gap-20 ${poppins.className}`}
    >
      {/* LEFT STATIC PART  */}

      <section
        className='w-4/12 h-screen
        flex justify-start items-start flex-col sticky top-0'
      >
        {/* Basic intro div */}
        <div className='py-12'>
          <div className='flex justify-center item-center flex-col gap-3'>
            <p className={`text-5xl font-extrabold `}>Brittany Chiang</p>
            <p className={`font-medium text-xl`}>
              Lead Engineer at Upstatement
            </p>
            <p className={`text-base text-light-400 pt-2 max-w-xs`}>
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
        </div>

        {/* Navigation between sections */}
        <ul className='list-style-none ml-5 '>
          {['About', 'Experience', 'Projects'].map((item) => (
            <li
              className={`text-sm pl-8 hover:text-white hover:before:text-white font-normal relative before:absolute before:w-10 before:h-[2px] before:top-1/2 before:-left-4
               before:bg-light-400 `}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Social media links */}
        <div className='mt-auto flex justify-center items-start gap-10 pb-10'>
          <a href=''>
            <BsGithub
              size='22'
              className='text-light-400 hover:text-light-100'
            />
          </a>
          <a href=''>
            <BsTwitter
              size='22'
              className='text-light-400 hover:text-light-100'
            />
          </a>
          <a href=''>
            <BsLinkedin
              size='22'
              className='text-light-400 hover:text-light-100'
            />
          </a>
        </div>
      </section>

      {/* ***************************************************************************** */}

      {/* RIGHT SIDE SCROLLABLE PART  */}
      <section className='w-4/12 py-12'>
        {/* INTRODUCTION IN BRIEF  */}
        <div className='flex justify-center items-center flex-col gap-5 px-4 py-2'>
          <p className='text-xs text-light-400'>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>

          <p className='text-xs text-light-400'>
            When I’m not at the computer, I’m usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
            Korok seeds K o r o k s e e d s .
          </p>
        </div>

        {/* EXPERIENCE SECTION  */}
        <div className='sticky top-0'>
          <h1 className='px-4 py-2 text-sky-300'>EXPERIENCE</h1>
          {/* FIRST EXP */}
          <div
            className='flex justify-center items-start gap-4 p-4
            cursor-pointer hover:bg-gray-800  hover:border-gray-700 rounded-md'
          >
            <p className='text-light-400 flex justify-center items-center text-sm w-full'>
              2022
              <span className='border w-3 border-light-400 mx-1 rounded-full'></span>
              PRESENT
            </p>
            <div className='flex justify-center items-start flex-col'>
              <h3 className='font-semibold text-lg'>SDE - 1 . Kenko health</h3>
              <p className='text-sm text-gray-400 font-medium w-32 leading-4'>
                Web Frontend Developer
              </p>
              <p className='text-sm'>
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more. Provide
                leadership within engineering department through close
                collaboration, knowledge shares, and mentorship.
              </p>
              <div className='flex flex-wrap justify-start items-center gap-2 mt-2'>
                {SKILLS.map((item) => (
                  <Badge
                    key={item}
                    className='text-sky-300 font-medium rounded-2xl cursor-pointer bg-slate-800 py-1 px-3 text-xs'
                    content={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
