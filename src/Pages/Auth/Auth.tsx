import Login from "../../Componants/Form/Login/Login"
import SignUp from "../../Componants/Form/Signup/SignUp";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/hooks";
import { toggleLogInSignUp } from "../../Redux/Slices/AuthSlice";
import "./Auth.scss";

const Auth = () => {

  const { isLoggedInPage } = useAppSelector((state) => state.AuthSlice)
  const dispatch = useAppDispatch();
  const toggleLogInSignUpHandler = () => {
    dispatch(toggleLogInSignUp());
  }

  return (
    <div className="auth-main-container">
      <div className="auth-form-card">

        <div className="login-form-title-container">
          <div className="login-form-title">{isLoggedInPage ? "Sign In" : "Sign Up"}</div>

          <div className="sinup-toggle-msg">
            {isLoggedInPage ? (
              <>
                Don't have an account? <span onClick={toggleLogInSignUpHandler}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account? <span onClick={toggleLogInSignUpHandler}>Sign In</span>
              </>
            )}
          </div>

        </div>

        {
          isLoggedInPage ?
            <Login />
            :
            <SignUp />
        }
      </div>
    </div>
  )
}

export default Auth