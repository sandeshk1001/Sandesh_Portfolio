import React from "react";
import Opensignal from '../assets/Images/opensignal.png'
import InfoBeans from '../assets/Images/infobeanslogo.jpeg'

const Experience = () => {

  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full ">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center">
            Professional Experience
          </p>
        </div>

        <div>
          <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className=" max-w-xl mx-auto p-4 rounded-xl shadow-md bg-slate-100">
            <div className="flex flex-col font-medium gap-1 w-full">
              <h1 className="text-xl md:text-2xl font-semibold">
                Full Stack Developer
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
                <img src={InfoBeans} alt="Atoms Digital Solution" className="h-5 w-5  scale-y-150 lg:w-20 bg-transparent mix-blend-multiply" />InfoBeans
              </div>
              <p className="text-base md:text-base text-gray-500">
                Jan , 2023 - Present
              </p>
            </div>
            <div className="flex w-fit mx-auto">
              <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
                <li className="py-2 md:py-3">
                  Worked as Full Stack Developer in the core team.
                </li>
                <li className="py-2 md:py-3">
                  Developed and maintained 30+ UI interfaces and Rest APIs.
                </li>
                <li className="py-2 md:py-3">
                  Utilized version control systems, particularly Git, to manage codebase and
                  collaborate with team members.
                </li>
                <li className="py-2 md:py-3">
                  develop, and enhance the both Product and Admin website.
                </li>
                <li className="py-2 md:py-3">
                  Received a two-time Client appreciation for bug-free releases.
                </li>
                <li className="py-2 md:py-3">
                  Tools & Technologies :- Spring 5, ReactJS 18, AngularJS, PostgreSQL, SonarQube.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}

export default Experience;