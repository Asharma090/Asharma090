import { Appointment, Budget, Call, Discount, Facebook, FilledStar, FullScreen, FullScreenFill, Instagram, Location, OutlinedStar, Save, Share, Tick } from "@/icons";
import Header from "@/shared/Header";
import VERIFIED from "../../public/verified.svg";
import Image from "next/image";
import Review from "./Review";
import Base from "@/template/base";
import { useState } from "react";
import Filter from "@/shared/Filter";
import ResultCard from "@/shared/ResultCard";
import ResultDetail from "@/shared/ResultDetail";

const Result = () => {
  return (
    <Base isSearch hideFooter>
      <div className="result-page">
        <Filter />

        <div className="p-3 flex-grow-1">
          <div className="content">
            <div className="row">
              <div className="col-md-4">
                <div className="result-card-wrapper">
                  {Array(10).fill(undefined).map(() => (
                    <ResultCard />
                  ))}
                </div>
              </div>
              <div className="col-md-8">
                <ResultDetail />
              </div>
            </div>
          </div>
        </div>
      </div>


    </Base>
  )
}

export default Result;