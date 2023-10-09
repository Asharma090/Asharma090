import { FilledStar, OutlinedStar, Tick } from "@/icons";

const Filter = () => {
  return (
    <div className="filter">
      <div className="block d-flex align-items-center justify-content-between">
        <h4>Filters</h4>

        <button>Clear All</button>
      </div>
      <div className="block">
        <h4>Ratings</h4>
        <div className="rating-checkbox mt-2">
          <label>
            <input type="checkbox" />
            <span>
              <Tick />
            </span>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
          </label>

          <label>
            <input type="checkbox" />
            <span>
              <Tick />
            </span>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <OutlinedStar />
          </label>

          <label>
            <input type="checkbox" />
            <span>
              <Tick />
            </span>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <OutlinedStar />
            <OutlinedStar />
          </label>

          <label>
            <input type="checkbox" />
            <span>
              <Tick />
            </span>
            <FilledStar />
            <FilledStar />
            <OutlinedStar />
            <OutlinedStar />
            <OutlinedStar />
          </label>

          <label>
            <input type="checkbox" />
            <span>
              <Tick />
            </span>
            <FilledStar />
            <OutlinedStar />
            <OutlinedStar />
            <OutlinedStar />
            <OutlinedStar />
          </label>

        </div>
      </div>

      <div className="block">
        <h4>Experience</h4>
      </div>

      <div className="block d-flex align-items-center justify-content-between">
        <h4>Certified</h4>
        <div className="custom-switch">
          <input type="checkbox" />
          <span></span>
        </div>
      </div>

      <div className="block d-flex align-items-center justify-content-between">
        <h4>Verified</h4>
        <div className="custom-switch">
          <input type="checkbox" />
          <span></span>
        </div>
      </div>

      <div className="block d-flex align-items-center justify-content-between">
        <h4>Recommended</h4>
        <div className="custom-switch">
          <input type="checkbox" />
          <span></span>
        </div>
      </div>
    </div>
  )
 };

export default Filter;