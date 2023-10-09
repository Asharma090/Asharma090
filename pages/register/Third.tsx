import Image from "next/image"
import Upload from "../../public/images/upload.png";

const ThirdStep = ({ style }: any) => {
  return (
    <div className={style["right-side"]}>
      <h3>Vendor Details</h3>

      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>First Name</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter First Name"
            />
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Last Name</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Last Name"
            />
          </div>
        </div>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Address</label>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Enter Address"
        />
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Upload Photo</label>
        <div className={style["upload-images"]}>
          <h1>
            <Image alt="" src={Upload} /> Upload Photo
          </h1>
          <p>
            Image can be JPEG, JPG, PNG and cannot exceed 5MB.
          </p>
        </div>
      </div>

      <div className={`${style["form-group"]} mb-4`}>
        <label>Document Type</label>
        <select className={style["form-select"]}>
          <option value="">
            Select Document Type like DL, PR etc
          </option>
        </select>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>About Business</label>
        <textarea
          className={style["form-control"]}
          rows={3}
          placeholder="Describe about your Business"
        ></textarea>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Upload Identity Document</label>
        <div className={style["upload-images"]}>
          <h1>
            <Image alt="" src={Upload} /> Upload Identity Document
          </h1>
          <p>
            Image can be JPEG, JPG, PNG and cannot exceed 5MB.
          </p>
        </div>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Areas / City</label>
        <select className={style["form-select"]}>
          <option value="">
            Select your Area or City Covered
          </option>
        </select>
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Service Offered / Category</label>
            <select className={style["form-select"]}>
              <option value="">Select Category</option>
            </select>
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Sub-Service / Sub-Category</label>
            <select className={style["form-select"]}>
              <option value="">Select Sub-Category</option>
            </select>
          </div>
        </div>
      </div>
      <div className={style["form-group"]}>
        <button type="submit" className={style["login-btn"]}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default ThirdStep