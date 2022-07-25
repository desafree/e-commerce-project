import classes from "./SectionText.module.scss";

const SectionText = () => {
  return (
    <>
      <section className={classes.container}>
        <h2>Welcome</h2>
        <div className={classes.text}>
          <h4>Welcome to Arch Studio</h4>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results. <br />
            <br />
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight. <br />
            <br />
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className={classes["image-container"]}></div>
      </section>
    </>
  );
};

export default SectionText;
