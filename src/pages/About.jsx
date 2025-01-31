import BotBar from "../components/BotBar/BotBar"

function About() {
  return (
    <div className="mx-gutter pt-[32px] mt-[10px] border-t-[1px] border-grey2 h-[calc(100svh-136px)] flex flex-col justify-between md:mt-[40px] md:h-[calc(100svh-150px)] lg:grid lg:grid-cols-12 lg:gap-x-columnGap lg:mt-[32px] lg:h-[calc(100vh-700px)]">
      <div className="grid grid-cols-4 gap-x-columnGap lg:col-span-8 lg:grid-cols-8 lg:h-fit">
        <div className="flex flex-col gap-y-[8px] col-span-2 md:grid md:grid-cols-6 gap-x-columnGap md:col-span-4 md:mt-[32px] lg:col-span-8 lg:grid-cols-8">
          <h6 className="text-grey1 blockH2 md:col-span-2 lg:col-span-4">[ Services ]</h6>
          <ul className="flex flex-col gap-[4px]">
            <li className="leading-none whitespace-nowrap bodyCopy">Full Stack Dev</li>
            <li className="leading-none whitespace-nowrap bodyCopy">Front End Dev</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-[8px] col-span-2 md:grid md:grid-cols-6 gap-x-columnGap md:col-span-4 md:mt-[32px] lg:col-span-8 lg:grid-cols-8">
          <h6 className="text-grey1 blockH2 col-span-2 lg:col-span-4">[ contact ]</h6>
          <a href="mailto:sayonbra@gmail.com" className="transition-colors duration-300 hover:text-grey1">sayonbra@gmail.com</a>
        </div>
        <div className="col-span-4 mt-[32px] md:row-start-1 md:grid md:grid-cols-6 gap-x-columnGap lg:col-span-8 lg:grid-cols-8 lg:mt-[0px]">
          <h6 className="text-grey1 blockH2 mb-[8px] md:col-span-2 lg:col-span-4">[ About ]</h6>
          <p className="md:col-span-4 md:max-w-[320px]">I am a junior Full Stack developer passionate about creating interactive and visually appealing web experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in developing modern and user-friendly user interfaces. <br/><br/>
          My main focus is on using React to build reusable components and efficiently manage application state. I am familiar with the latest web design trends and strive to deliver high-quality products that meet accessibility and performance standards.</p>
        </div>
        <div className="col-span-4 mt-[32px] md:grid md:grid-cols-6 gap-x-columnGap lg:col-span-8 lg:grid-cols-8 mb-5">
          <h6 className="text-grey1 blockH2 mb-[8px] md:col-span-2 lg:col-span-4">[ Socials ]</h6>
          <ul className="flex flex-col gap-[4px]">
            <li className="leading-none">
              <a href="https://www.linkedin.com/in/ivan-sanza/" target="_blank" rel="noopener noreferrer" className="bodyCopy transition-colors duration-300 hover:text-grey1">LinkedIn</a>
            </li>
            <li className="leading-none">
              <a href="https://github.com/IvanZaja" target="_blank" rel="noopener noreferrer" className="bodyCopy transition-colors duration-300 hover:text-grey1">Github</a>
            </li>
          </ul>
        </div>
        <img alt="Erin Fleming Portrait" loading="lazy" width="764" height="764" decoding="async" data-nimg="1" className="col-span-4 my-[32px] md:hidden transition-opacity duration-700" src="https://github.com/IvanZaja/Portfolio2/blob/31b590c8a2a1c272be9c506b38665905bd65585f/public/ProjectImages/profilepic.jpg?raw=true" style={{color: "transparent"}}></img>
        <img alt="Ivan Sanza Portrait" loading="lazy" width="1920" height="1920" decoding="async" data-nimg="1" className="col-span-4 justify-self-end hidden mt-[64px] mb-[32px] transition-opacity duration-700 md:block md:w-[309px] md:h-[392px] object-cover lg:w-[unset] lg:hidden lg:h-[unset]" src="https://github.com/IvanZaja/Portfolio2/blob/31b590c8a2a1c272be9c506b38665905bd65585f/public/ProjectImages/profilepic.jpg?raw=true" style={{color: "transparent"}}></img>
      </div>
      <img alt="Ivan Sanza Portrait" loading="lazy" width="1920" height="1920" decoding="async" data-nimg="1" className="col-span-4 justify-self-end hidden transition-opacity duration-700 md:w-[309px] md:h-[392px] object-cover lg:w-[unset] lg:mb-[32px] lg:h-[calc(100vh-311px)] lg:block" src="https://github.com/IvanZaja/Portfolio2/blob/31b590c8a2a1c272be9c506b38665905bd65585f/public/ProjectImages/profilepic.jpg?raw=true" style={{color: "transparent"}}></img>

      <BotBar />
    </div>
  )
}

export default About