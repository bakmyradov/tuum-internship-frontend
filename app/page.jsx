import ContactForm from "./components/ContactForm";
import IconClose from "./components/icon/IconClose";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-8 px-4 py-10">
      <div className="flex sm:px-10 md:px-16 lg:px-10 xl:px-20 lg:flex-row flex-col relative">
        <div className="button absolute xl:right-[12%] lg:right-[7%] sm:right-[8%] right-[2%] lg:top-[5%] top-0">
          <button className="lg:w-10 lg:h-10 w-10 h-10" aria-label="Close Button">
            <IconClose />
          </button>
        </div>
        <div className="left flex flex-col sm:items-start items-center lg:w-[35%] w-full">
          <div className="top">
            <h1 className="md:text-4xl text-xl font-reckless">Media enquiries:</h1>
            <a href="mailto:press@tuum.com" className="relative mt-2 text-lg font-denim after:content-[''] after:absolute after:h-[1px] after:-bottom-0.5 after:left-0 after:w-full after:bg-black after:transition-all after:duration-500 hover:after:w-0 hover:after:opacity-0 cursor-pointer">
              press@tuum.com
            </a>
          </div>
          <div className="bottom sm:mt-8 mt-4">
            <h1 className="md:text-4xl text-xl font-reckless">Career questions:</h1>
            <a href="mailto:careers@tuum.com" className="relative mt-2 text-lg font-denim after:content-[''] after:absolute after:h-[1px] after:-bottom-0.5 after:left-0 after:w-full after:bg-black after:transition-all after:duration-500 hover:after:w-0 hover:after:opacity-0 cursor-pointer">
              careers@tuum.com
            </a>
          </div>
        </div>
        <div className="right lg:w-[65%] w-full lg:mt-0 mt-8">
          <div className="form bg-white px-8 lg:px-10 xl:px-16 py-6 w-full  rounded-[40px]">
            <h1 className="text-[2.8rem] font-reckless">Contact us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
