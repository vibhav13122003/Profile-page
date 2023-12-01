import { useForm } from "react-hook-form";
import { firestore } from "src/components/firebase"; // Adjust the path accordingly
import "src/components/ProfilePage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      console.log(firestore);
    console.log(data)
    try {
      await firestore.collection("profiles").add(data);

      // Display success toast
      toast.success("Profile successfully submitted!");
    } catch (error) {
      // Display error toast
      toast.error("Error submitting profile. Please try again.");
      console.error("Error submitting profile:", error);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="container-header">
          <h1>My Profile</h1>
        </div>
        <div className="secondary-container">
          <div className="profile-image">
            <h2>NISHIKA TYAGI</h2>
          </div>
          <div className="form-container">
            <form action="" method="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <div className="label">
                  <label>Name :</label>
                </div>
                <div className="label-input">
                  <input type="text" name="name" {...register("name", {})} />
                </div>
              </div>
              <div className="form-control">
                <div className="label">
                  <label>Email :</label>
                </div>
                <div className="label-input">
                  <input
                    type="text"
                    name="email"
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        // message:
                        //   "Invalid email format. Please enter a valid email address.",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {/* {errors.email && <p>{errors.email.message}</p>} */}
                </div>
              </div>
              <div className="form-control">
                <div className="label">
                  <label>Year :</label>
                </div>
                <div className="select">
                  <select
                    name="year"
                    id=""
                    {...register("year")}
                    required={true}
                  >
                    <option value="Yes">1st year</option>
                    <option value="No">2nd year</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <div className="label">
                  <label>Branch :</label>
                </div>
                <div className="select">
                  <select
                    name="branch"
                    id=""
                    {...register("branch")}
                    required={true}
                  >
                    <option value="cse">Yes</option>
                    <option value="ai">No</option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <div className="label">
                  <label>Club :</label>
                </div>
                <div className="select">
                  <select
                    name="club"
                    id=""
                    {...register("club")}
                    required={true}
                  >
                    <option value="dsdl">dsdl</option>
                    <option value="gdsc">gdsc</option>
                  </select>
                </div>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
