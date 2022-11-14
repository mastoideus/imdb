import React, { useEffect, useState } from "react";
import imdbLogo from "../../assets/images/imdbLogo1.png";
import { BsInfoCircle } from "react-icons/bs";
import { useSignInput } from "../../customHooks/useSignInput";

const SignInPage = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [rePass, setRePass] = useState("");
  const [rePassInvalid, setRePassInvalid] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useSignInput("email");

  const {
    value: passValue,
    isValid: passIsValid,
    isInvalid: passIsInvalid,
    inputChangeHandler: passChangeHandler,
    blurHandler: passBlurHandler,
    reset: passReset,
  } = useSignInput("password");

  const {
    value: nameValue,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useSignInput("name");

  useEffect(() => {
    if (emailIsValid && nameIsValid && passIsValid) {
      setFormIsValid(true);
    }
  }, [emailIsValid, nameIsValid, passIsValid]);

  const rePassChangeHander = (e) => {
    setRePass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (passValue !== rePass) {
      setRePassInvalid(true);
      return;
    }
  };

  return (
    <div className=" bg-white w-[100vw] h-[100vh] pt-5">
      <a href="/">
        <img
          src={imdbLogo}
          alt=""
          className=" h-[50px] mb-5 transform relative left-[50%] -translate-x-[50%]"
        />
      </a>
      <form
        onSubmit={submitHandler}
        className="text-black w-[23%] border border-solid p-5 transform relative left-[50%] -translate-x-[50%] "
      >
        <h2 className=" text-3xl mb-5 font-[400]">Create account</h2>
        <div className=" signInInputCont ">
          <label className="text-sm font-semibold">Your name</label>
          <input
            type="text"
            className={`signInInput ${
              nameIsInvalid && "bg-red-100 border-red-600"
            }`}
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className=" signInInputCont">
          <label className=" text-sm font-semibold">Email</label>
          <input
            type="email"
            className={`signInInput ${
              emailIsInvalid && " bg-red-100 border-red-600 "
            }`}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div className=" signInInputCont">
          <label className={` text-sm font-semibold`}>Password</label>
          <input
            type="password"
            className={`signInInput  ${
              passIsInvalid && "bg-red-100 border-red-600"
            }`}
            value={passValue}
            onChange={passChangeHandler}
            onBlur={passBlurHandler}
          />
          <span className="flex items-center gap-1 mt-1">
            <BsInfoCircle />
            <small>Passwords must be at least 8 characters (no digits).</small>
          </span>
        </div>
        <div className=" signInInputCont">
          <label className=" text-sm font-semibold">Re-enter password</label>
          <input
            type="password"
            className={`signInInput ${
              rePassInvalid && "bg-red-100 border-red-600"
            }`}
            value={rePass}
            onChange={rePassChangeHander}
          />
        </div>
        <button
          disabled={!formIsValid}
          className={` ${
            formIsValid && "disabled:"
          } text-gray-800 border border-orange-400 bg-gradient-to-b from-orange-100 text-center w-[100%] text-sm rounded-sm bg-yellow-400 font-semibold p-1 mb-7`}
        >
          Create your IMDb account
        </button>
        <div className="h-[7px] rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-slate-300 after:bg-gradient-to-r after:from-slate-200 z-0 after:content-none after:block after:h-[44px] after:w-[100%] "></div>
      </form>
    </div>
  );
};

export default SignInPage;
