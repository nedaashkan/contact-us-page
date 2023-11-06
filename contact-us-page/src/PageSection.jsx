import React from "react";
import "./PageSection.css";

export default function PageSection() {
  return (
    <div className="PageSection">
      <div className="row mt-4 mt-md-3 mt-lg-4 d-flex justify-content-center text-center">
        <div className="col-2 col-md-2 item">
          <span>محصولات فیزیکی</span>
        </div>

        <div className="col-2 col-md-2 col-lg-2 item">
          <span>محصولات دیجیتال</span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 item">
          <span>حساب کاربری</span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 item pb-2 border-left ">
          <span>گزارش باگ</span>
        </div>
      </div>
    </div>
  );
}
