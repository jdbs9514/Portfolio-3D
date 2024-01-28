import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';
import { socials } from '../constants/index.js';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm <span className="blue-gradient_text font-semibold drop-shadow">Josué</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Full stack developer based in Perú, specializing in create an amazing, abstract,
          beautifull, and intuitive UI/UX interfaces using React.js</p>
      </div>
      <div className="mt-5 mb-10 flex justify-start items-start">
        {socials.map((social) => ((
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            key={social.name}
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        )
        ))}
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div className="block-container w-10 h-10" key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/1 h-1/1 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-16">
          <h3 className="subhead-text">Experience</h3>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            over the past two years I have dedicated most of my time to learning and developing
            technologies at the forefront of software development. Let me show you some of my:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.institution}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.institution}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.institution}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li className="text-black-500/50 font-normal pl-1 text-sm" key={`experience-point-${index}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About