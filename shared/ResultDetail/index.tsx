import { Appointment, Budget, Call, Discount, Facebook, FilledStar, FullScreen, FullScreenFill, Instagram, Location, OutlinedStar, Save, Share } from "@/icons";
import VERIFIED from "../../public/verified.svg";
import Image from "next/image";
import Review from "@/pages/result/Review";
import { useState } from "react";

const ResultDetail = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="result-detail">
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
                    <FullScreen />
                  </button>
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

              <p>
                <Call />
                (437) 244 - 5447
              </p>

              <p>
                <Instagram />
                dev_clearners&co.
              </p>

              <p>
                <Facebook />
                Dev Patel Cleaners & Co.
              </p>
            </div>
          </div>

          <div className="result-card-body">
            <div className="summary">
              <h3>
                Summary
              </h3>

              <p>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              </p>
            </div>

            <div className="summary">
              <h3>
                Services Offered
              </h3>

              <div className="services">
                <span>Cleaning</span>
                <span>Electrical</span>
                <span>Pot Installation</span>
              </div>
            </div>

            <div className="summary">
              <h3>
                Why Choose Me?
              </h3>

              <ul className="why-me">
                <li>
                  <Location />
                  Locally Owned
                </li>

                <li>
                  <Appointment />
                  Available By Appointment
                </li>

                <li>
                  <Discount />
                  Discounts
                </li>

                <li>
                  <Budget />
                  Budget Friendly
                </li>
              </ul>
            </div>

            <div className="summary">
              <h3>
                Work Images

                <button>See More</button>
              </h3>

              <div className="row">
                <div className="col-md-6">
                  <div className="image">
                    <button><FullScreenFill /></button>
                    <img className="img-fluid rounded" src="https://wallpapers.com/images/hd/hd-colliding-heavenly-bodies-in-sky-6afltqqcawn54mbn.webp" alt="" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="image">
                    <button><FullScreenFill /></button>
                    <img className="img-fluid rounded" src="https://wallpapers.com/images/hd/hd-colliding-heavenly-bodies-in-sky-6afltqqcawn54mbn.webp" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image mb-0">
                    <button><FullScreenFill /></button>
                    <img className="img-fluid rounded" src="https://wallpapers.com/images/hd/hd-colliding-heavenly-bodies-in-sky-6afltqqcawn54mbn.webp" alt="" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="image mb-0">
                    <button><FullScreenFill /></button>
                    <img className="img-fluid rounded" src="https://wallpapers.com/images/hd/hd-colliding-heavenly-bodies-in-sky-6afltqqcawn54mbn.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="summary">
              <h3>
                Reviews
                <button onClick={() => setOpen(true)}>Write a Review</button>
              </h3>

              <div className="row">
                <div className="col-md-6">
                  <div className="review-box">
                    <div className="wrap">
                      <div className="d-flex align-items-center gap-2">
                        <div className="icon">
                          <img className="img-fluid" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="" />
                        </div>
                        <div className="content">
                          <h3>Sara Williams</h3>
                          <p>Apr 21, 2023</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-1 mt-2">
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <OutlinedStar />
                      </div>
                    </div>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="review-box">
                    <div className="wrap">
                      <div className="d-flex align-items-center gap-2">
                        <div className="icon">
                          <img className="img-fluid" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="" />
                        </div>
                        <div className="content">
                          <h3>Sara Williams</h3>
                          <p>Apr 21, 2023</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-1 mt-2">
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <OutlinedStar />
                      </div>
                    </div>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="review-box mb-0">
                    <div className="wrap">
                      <div className="d-flex align-items-center gap-2">
                        <div className="icon">
                          <img className="img-fluid" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="" />
                        </div>
                        <div className="content">
                          <h3>Sara Williams</h3>
                          <p>Apr 21, 2023</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-1 mt-2">
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <OutlinedStar />
                      </div>
                    </div>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="review-box mb-0">
                    <div className="wrap">
                      <div className="d-flex align-items-center gap-2">
                        <div className="icon">
                          <img className="img-fluid" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="" />
                        </div>
                        <div className="content">
                          <h3>Sara Williams</h3>
                          <p>Apr 21, 2023</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-1 mt-2">
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <OutlinedStar />
                      </div>
                    </div>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && <Review onClick={() => setOpen(false)} />}
    </>
  )
}

export default ResultDetail;