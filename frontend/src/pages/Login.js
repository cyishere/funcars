import { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { useFormChange } from "../utils/hooks";
// import { userLogin } from "../features/user/userSlice";
import "../styles/form.scss";
import "../styles/button.scss";

const Login = () => {
  const [requestStatus, setRequestStatus] = useState("idle");
  const { values, handleChange } = useFormChange({
    username: "",
    password: "",
  });

  // const loginUser = useSelector((state) => state.user.loginUser);
  // const errors = useSelector((state) => state.user.errors);

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const returnedLoginInfo = await dispatch(userLogin(values));

    //   // failed
    //   if (returnedLoginInfo.payload.hasOwnProperty("errors")) {
    //     setRequestStatus("failed");
    //   } else {
    //     localStorage.setItem(
    //       "funcars_user",
    //       JSON.stringify(returnedLoginInfo.payload)
    //     );
    //   }
    // } catch (error) {
    //   setRequestStatus("failed");
    //   console.log("error in login page: ", error);
    // }
  };

  // if (loginUser) {
  //   return (
  //     <Message>
  //       <Message.Header>
  //         {loginUser.username} has already logged in.
  //       </Message.Header>
  //       <p>
  //         Go to <Link to="/">home page</Link>.
  //       </p>
  //     </Message>
  //   );
  // }

  return (
    <main className="ms-page">
      <header className="page-header">
        <h2 className="page-header__title">Login</h2>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please input your username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please input your password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button className="button button-primary">Login</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
