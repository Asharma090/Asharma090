import Image from "next/image"
import Upload from "../../public/images/upload.png";

const FourthStep = ({ style }: any) => {
  return (
    <div className={style["right-side"]}>
      <h3>Photo Upload</h3>

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
        <label>Photos Description</label>
        <textarea
          className={style["form-control"]}
          rows={3}
          placeholder="Describe your Photos"
        ></textarea>
      </div>

      <div className={style["form-group"]}>
        <button type="submit" className={style["login-btn"]}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default FourthStep