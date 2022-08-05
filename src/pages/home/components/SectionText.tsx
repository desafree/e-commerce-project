import classes from "./SectionText.module.scss";

const SectionText = () => {
  return (
    <>
      <section className={classes.container}>
        <h2>Welcome</h2>
        <div className={classes.text}>
          <h4>Lorem ipsum dolor sit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laborum nam aspernatur, obcaecati maxime animi natus veniam. Fugiat
            dicta reiciendis voluptatibus! Debitis possimus et maiores atque
            quam adipisci molestias velit nobis molestiae quis! <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nobis
            ex veniam eum perspiciatis ut, suscipit illo architecto excepturi,
            tempore ab voluptate odio at ullam quae! Nemo vitae aspernatur
            numquam. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            mollitia repellendus nobis aut harum voluptatibus cum at, fugiat
            eaque repudiandae incidunt accusamus molestiae sequi eligendi, dicta
            officiis!
          </p>
        </div>
        <div className={classes["image-container"]}></div>
      </section>
    </>
  );
};

export default SectionText;
