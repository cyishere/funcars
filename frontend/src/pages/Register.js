import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Message from "../components/Message/Message";
import { useFormChange } from "../utils/hooks";
import { addNewUser } from "../features/user/userSlice";
import fetchStates from "../utils/fetchStates";

// import { createUser } from "../services/user";

import "../styles/form.scss";
import "../styles/button.scss";

const Register = () => {
  const [requestStatus, setRequestStatus] = useState(fetchStates.idle);

  const { values, handleChange } = useFormChange({
    username: "",
    email: "",
    password: "",
    passconf: "",
  });

  const message = useSelector((state) => state.user.message);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus(fetchStates.fetching);
    try {
      const result = await dispatch(addNewUser(values));
      console.log("result:", result);
      if (result.payload.type === "error") {
        setRequestStatus(fetchStates.error);
      } else {
        setRequestStatus(fetchStates.success);
      }
      // await createUser(values);
    } catch (error) {
      setRequestStatus(fetchStates.error);
      console.log("error in register frontend: ", error.message);
    } finally {
      setRequestStatus(fetchStates.idle);
    }
  };

  const successContent = (
    <p>
      Successfully registered! Please go to <Link to="/login">login page</Link>.
    </p>
  );

  return (
    <main className="ms-page">
      <header className="page-header">
        <h2 className="page-header__title">Register</h2>
      </header>

      {requestStatus === fetchStates.error && (
        <Message msgContent={message} msgStatus={requestStatus} />
      )}

      {requestStatus === fetchStates.success && (
        <Message msgContent={successContent} msgStatus={requestStatus} />
      )}

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
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please input your e-mail"
            value={values.email}
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

        <div className="form-control">
          <label htmlFor="passconf">Password Confirm</label>
          <input
            type="password"
            name="passconf"
            id="passconf"
            placeholder="Confirm your password"
            value={values.passconf}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button
            className="button button-primary"
            type="submit"
            disabled={requestStatus === fetchStates.fetching}
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
};

export default Register;
