import { Link } from 'react-router-dom';
import arrow  from '../assets/icons/arrow.png';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} />
      </Link>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Josué</span> 👋
      <br />
      A software Engineer from Perú
    </h1>
  ),

  2: (
    <InfoBox
      text="I learned many skills in the study process that helped
      me to understand logic and software development."
      link="/about"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious
      about the impact? Check out my projects."
      link="/projects"
      btnText="visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few
      keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo