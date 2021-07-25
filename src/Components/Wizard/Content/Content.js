import React from "react";
import { useForm } from "react-hook-form";
import Buttons from "../Buttons/Buttons";
import Dichotomous from "./Dichotomous/Dichotomous";

const Content = ({
  currentStep,
  stepList,
  setAllContent,
  handlePrevious,
  handleNext,
  handleReset,
  allContent,
  success,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAllContent(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left flex flex-col items-center mt-10 "
    >
      {currentStep === 1 && (
        <Dichotomous
          heading="Business Owner?"
          name="owner"
          register={register}
          errors={errors}
        />
      )}

      {currentStep === 2 && allContent.owner === "Yes" ? (
        <Dichotomous heading="Located in US?" name="US" register={register} />
      ) : currentStep === 2 && allContent.owner === "No" ? (
        <Dichotomous
          heading="Login with Facebook?"
          name="fbLogin"
          register={register}
        />
      ) : (
        ""
      )}

      {currentStep === 3 &&
      allContent.owner === "Yes" &&
      allContent.US === "Yes" ? (
        <Dichotomous
          heading="Large Corporation?"
          name="largeCorp"
          register={register}
        />
      ) : currentStep === 3 &&
        allContent.owner === "Yes" &&
        allContent.US === "No" ? (
        <p className="text-red-400 text-lg font-bold">Access Denied Error!</p>
      ) : (
        ""
      )}

      {currentStep === 3 &&
      allContent.owner === "No" &&
      allContent.fbLogin === "Yes" ? (
        <Dichotomous
          heading="Placeholder for Fb login. Yes = Shows Small Corp Options, No = Shows Large Corp Options"
          name="fbLoggedIn"
          register={register}
        />
      ) : currentStep === 3 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "No" ? (
        <Dichotomous
          heading="Placeholder for email login. No = Shows Small Corp Options, Yes = Shows Large Corp Options"
          name="emailLoggedIn"
          register={register}
        />
      ) : (
        ""
      )}

      {currentStep === 4 &&
      allContent.owner === "No" &&
      allContent.fbLogin === "Yes" &&
      allContent.fbLoggedIn === "Yes" ? (
        <Dichotomous
          heading="Connected with large corporation?"
          name="connection"
          register={register}
        />
      ) : currentStep === 4 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.fbLoggedIn === "No" ? (
        <Dichotomous
          heading="Interested in taking survey?"
          name="survey"
          register={register}
        />
      ) : (
        ""
      )}

      {currentStep === 5 &&
      allContent.owner === "No" &&
      allContent.fbLogin === "Yes" &&
      allContent.fbLoggedIn === "No" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Large Corporation Sign Up From
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.fbLoggedIn === "Yes" &&
        allContent.connection === "Yes" ? (
        <p className="text-yellow-400 text-lg font-bold">
          User must contact large corporation
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.fbLoggedIn === "Yes" &&
        allContent.connection === "No" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Small Corp Sign up form
        </p>
      ) : (
        ""
      )}

      {currentStep === 4 &&
      allContent.owner === "No" &&
      allContent.fbLogin === "Yes" &&
      allContent.emailLoggedIn === "No" ? (
        <Dichotomous
          heading="Connected with large corporation?"
          name="connection"
          register={register}
        />
      ) : currentStep === 4 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.emailLoggedIn === "Yes" ? (
        <Dichotomous
          heading="Interested in taking survey?"
          name="survey"
          register={register}
        />
      ) : (
        ""
      )}

      {currentStep === 5 &&
      allContent.owner === "No" &&
      allContent.fbLogin === "Yes" &&
      allContent.emailLoggedIn === "Yes" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Large Corporation Sign Up From
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.emailLoggedIn === "Yes" &&
        allContent.connection === "Yes" ? (
        <p className="text-yellow-400 text-lg font-bold">
          User must contact large corporation
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "No" &&
        allContent.fbLogin === "Yes" &&
        allContent.emailLoggedIn === "Yes" &&
        allContent.connection === "No" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Small Corp Sign up form
        </p>
      ) : (
        ""
      )}

      {currentStep === 4 &&
      allContent.owner === "Yes" &&
      allContent.US === "Yes" &&
      allContent.largeCorp === "Yes" ? (
        <Dichotomous
          heading="Interested in taking survey?"
          name="survey"
          register={register}
        />
      ) : currentStep === 4 &&
        allContent.owner === "Yes" &&
        allContent.US === "Yes" &&
        allContent.largeCorp === "No" ? (
        <Dichotomous
          heading="Connected with large corporation?"
          name="connection"
          register={register}
        />
      ) : (
        ""
      )}

      {currentStep === 5 &&
      allContent.owner === "Yes" &&
      allContent.US === "Yes" &&
      allContent.largeCorp === "Yes" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Large Corporation Sign Up From
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "Yes" &&
        allContent.US === "Yes" &&
        allContent.largeCorp === "No" &&
        allContent.connection === "Yes" ? (
        <p className="text-yellow-400 text-lg font-bold">
          User must contact large corporation
        </p>
      ) : currentStep === 5 &&
        allContent.owner === "Yes" &&
        allContent.US === "Yes" &&
        allContent.largeCorp === "No" &&
        allContent.connection === "No" ? (
        <p className="text-green-400 text-lg font-bold">
          Placeholder for Small Corp Sign up form
        </p>
      ) : (
        ""
      )}

      {currentStep === 6 ? success : ""}

      <Buttons
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleReset={handleReset}
        currentStep={currentStep}
        stepList={stepList}
      />
    </form>
  );
};

export default Content;
