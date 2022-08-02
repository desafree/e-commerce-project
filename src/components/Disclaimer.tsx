import classes from "./Disclaimer.module.scss";

const Disclaimer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h4>This project is just a demo!</h4>
        <p>
          If you need to contact me check the links below or reach me on
          linkedin!
        </p>
      </div>
      <a
        type="color"
        href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </div>
  );
};

export default Disclaimer;
