import "./about.scss";

const About = ({description}) => {
  
  return (
    <article className="about">
      <hr className="about__divider"></hr>
      <div className="about__paragraph-container">
        <p className="about__paragraph">
       {description}
        </p>
      </div>
    </article>
  );
};

export default About;
