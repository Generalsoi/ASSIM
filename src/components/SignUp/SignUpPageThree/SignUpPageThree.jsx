import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageThree.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageThree = ({ onContinue }) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log(data)
    onContinue(data, 3);
  };

  return (
    <div className="signup-pagethree">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupcontents">
        <div className="content-One content">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="content-Two content">
          <h4>Basic Personal Information</h4>

          <div className="form-two">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <select
                  {...register("gender", {
                    required: "Please, select your gender",
                  })}
                  id="gender"
                >
                  <option value="">---Select Gender---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div>
                <select {...register("stateOfOrigin")} id="origin">
                  <option value="">State of Origin</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="AkwaIbom">AkwaIbom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="CrossRivers">CrossRivers</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nassarawa">Nassarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plataeu">Plataeu</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>
              <div>
                <select {...register("lga")} id="lga">
                  <option value="lga">Local Government Area</option>
                </select>
              </div>
              <div>
                <input
                  {...register("school")}
                  type="text"
                  placeholder="Name of Your School"
                />
              </div>
              <div>
                <select
                  {...register("noOfSubjects")}
                  name="subjects"
                  id="subjects"
                >
                  <option value="">No. of subjects offered</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8</option>
                  <option value="nine">9</option>
                </select>
              </div>
              <div>
                <button type="submit">Complete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageThree;
