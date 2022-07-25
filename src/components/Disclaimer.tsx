import classes from "./Disclaimer.module.scss";
import Button from "./ui/Button";

const Disclaimer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h4>Let&apos;s talk about your project</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          dignissimos dolorum eum obcaecati aliquam quasi suscipit maiores
          cupiditate accusantium eos.
        </p>
      </div>
      <Button type="color">GET IN TOUCH</Button>
    </div>
  );
};

export default Disclaimer;
