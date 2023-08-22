import { Poppins } from 'next/font/google'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
  return (
    <main className='text-light-100 flex justify-center items-start gap-10'>
      {/* LEFT STATIC PART  */}

      <section
        className='w-4/12 h-screen
        flex justify-start items-start flex-col sticky top-0'
      >
        {/* Basic intro div */}
        <div className='py-12'>
          <p className={`text-3xl font-extrabold ${poppins.className}`}>
            Brittany Chiang
          </p>
          <p className={`font-mediuccwwm ${poppins.className}`}>
            Lead Engineer at Upstatement
          </p>
          <p className={`text-xs text-light-400 pt-2 ${poppins.className}`}>
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </div>

        {/* Navigation between sections */}
        <ul className='list-disc ml-5'>
          {['About', 'Experience', 'Projects'].map((item) => (
            <li className={`text-sm font-normal ${poppins.className}`}>
              {item}
            </li>
          ))}
        </ul>

        {/* Social media links */}
        <div className='mt-auto flex justify-center items-start gap-10 pb-10'>
          <a href=''>
            <BsGithub size='22' className='text-light-400' />
          </a>
          <a href=''>
            <BsTwitter size='22' className='text-light-400' />
          </a>
          <a href=''>
            <BsLinkedin size='22' className='text-light-400' />
          </a>
        </div>
      </section>

      {/* ***************************************************************************** */}

      {/* RIGHT SIDE SCROLLABLE PART  */}
      <section className='border border-yellow w-4/12'>
        {/* INTRODUCTION IN BRIEF  */}
        <div>
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>

          <p>
            When I’m not at the computer, I’m usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
            Korok seeds K o r o k s e e d s .
          </p>
        </div>

        {/* EXPERIENCE SECTION  */}
        <div className='sticky top-0'>
          <h1>EXPERIENCE</h1>
          {/* FIRST EXP */}
          <div>
            <h3>Lead Engineer at Upstatement</h3>
            <p>Senior Software Engineer</p>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
          </div>
          <div>
            <h3>Lead Engineer at Upstatement</h3>
            <p>Senior Software Engineer</p>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
          </div>
          <div>
            <h3>Lead Engineer at Upstatement</h3>
            <p>Senior Software Engineer</p>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
          </div>
          {/* SECOND EXP */}
          <div>
            <h3>Lead Engineer at Upstatement</h3>
            <p>Senior Software Engineer</p>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
          </div>
          {/* THIRD EXP */}
          <div>
            <h3>Lead Engineer at Upstatement</h3>
            <p>Senior Software Engineer</p>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
