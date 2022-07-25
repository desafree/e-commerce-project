import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import Navigation from "../../components/ui/Navigation";

const Login = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className={classes.container}>
        <div className={classes.login}>
          <form action="#">
            <h3>Login</h3>
            <input type="text" name="" id="" placeholder="Email address" />
            <input type="text" name="" id="" placeholder="Password" />
            <input type="text" name="" id="" placeholder="Repeat Password" />
            <button>Create an account</button>
            <p>
              Already have an account? <Link to="/">Login</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
