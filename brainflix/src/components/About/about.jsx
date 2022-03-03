import "./about.scss";

const About = (props) => {
  console.log(props)
  return (
    <article className="about">
      <hr className="about__divider"></hr>
      <div className="about__paragraph-container">
        <p className="about__paragraph">
       {props.description}
        </p>
      </div>
    </article>
  );
};

export default About;
