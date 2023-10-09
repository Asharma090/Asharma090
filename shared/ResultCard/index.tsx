import { FilledStar, Location, OutlinedStar, Save, Share } from "@/icons";
import VERIFIED from "../../public/verified.svg";
import Image from "next/image";

const ResultCard = () => {
  return (
    <div className="result-card">
      <div className="result-card-header">
        <div className="icon">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="" />
        </div>

        <div className="info">
          <div className="d-flex align-items-center">
            <h4>Dev Cleaners & Co.</h4>
            <div className="d-flex align-items-center ms-auto gap-2">
              <button>
                <Share />
              </button>
              <button>
                <Save />
              </button>
            </div>
          </div>
          <p>
            Dev Patel
            <Image src={VERIFIED} alt="" />
          </p>
          <p>
            <Location />
            Kitchener, ON | 25 Kms
          </p>
        </div>
      </div>

      <div className="result-card-footer">
        <div className="block d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center gap-1">
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <OutlinedStar />
            </div>

            <p>
              4 Reviews
            </p>
          </div>

          <button>Write a Review</button>
        </div>
      </div>
    </div>
  )
};

export default ResultCard;