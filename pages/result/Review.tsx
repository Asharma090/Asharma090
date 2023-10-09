import { Cross, FilledStar, OutlinedStar } from "@/icons";

const Review = ({ onClick }: any) => {
  return (
    <div className="primary-modal">
      <div className="wrap">
        <div className="primary-modal-header">
          <h3>Add Review</h3>

          <button onClick={onClick}>
            <Cross size={20} color="#B8BECE" />
          </button>
        </div>
        <div className="primary-modal-body">
          <div className="block">
            <h3>How would you Rate your Experience?</h3>

            <div className="box">
              <ul>
                <li>
                  <FilledStar size={46} color="#513980" />
                  Poor
                </li>

                <li>
                  <FilledStar size={46} color="#513980" />
                  Bad
                </li>

                <li className="active">
                  <FilledStar size={46} color="#513980" />
                  Average
                </li>

                <li>
                  <OutlinedStar size={46} color="#B8BECE" />
                  Good
                </li>

                <li>
                  <OutlinedStar size={46} color="#B8BECE" />
                  Excellent
                </li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h3>What did you like?</h3>

            <div className="box">
              <span className="tag">
                Experience
                <Cross />
              </span>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <span className="tag">
                Experience
              </span>

              <span className="tag">
                Pricing
              </span>

              <span className="tag">
                Cleanliness
              </span>

              <span className="tag">
                Professionalism
              </span>

              <span className="tag">
                Communication
              </span>

              <span className="tag">
                Quality
              </span>

              <span className="tag">
                Knowledge
              </span>
            </div>
          </div>

          <div className="block">
            <h3>What did you not like?</h3>

            <div className="box">
              <p>Select tag from below</p>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <span className="tag">
                Experience
              </span>

              <span className="tag">
                Pricing
              </span>

              <span className="tag">
                Cleanliness
              </span>

              <span className="tag">
                Professionalism
              </span>

              <span className="tag">
                Communication
              </span>

              <span className="tag">
                Quality
              </span>

              <span className="tag">
                Knowledge
              </span>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Review;