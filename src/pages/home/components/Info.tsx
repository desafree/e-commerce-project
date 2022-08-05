import classes from "./Info.module.scss";

const Info = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h3>
          Lorem ipsum dolor sit <span>consectetur</span>.
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          modi, voluptates at facere est maxime totam, ipsum blanditiis dolores
          ducimus vitae provident distinctio quasi odio atque quas obcaecati
          praesentium impedit quidem. Blanditiis ipsa voluptate aut repudiandae,
          iusto hic? Nostrum accusantium, unde doloremque explicabo suscipit
          maxime accusamus sint? Laboriosam, error ipsam.
        </p>
      </div>
      <div className={classes["image-container"]}></div>
    </div>
  );
};

export default Info;
