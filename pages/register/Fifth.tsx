const FifthStep = ({ style }: any) => {
  return (
    <div className={style["right-side"]}>
      <h3>Social Media</h3>

      <div className={`${style["form-group"]} mb-4`}>
        <label>Instagram ID</label>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Enter Instagram handle"
        />
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Facebook ID</label>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Enter Facebook handle"
        />
      </div>

      <div className={style["form-group"]}>
        <button type="submit" className={style["login-btn"]}>
          Finish
        </button>
      </div>
    </div>
  )
}

export default FifthStep