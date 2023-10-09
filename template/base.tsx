import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.bundle';
import '../scss/style.scss';
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

const Base = ({ children, hideFooter = false, isNeedHelp, isSearch }: any) => {
  return (
    <>
      <Header isNeedHelp={isNeedHelp} isSearch={isSearch} />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
};

export default Base;
