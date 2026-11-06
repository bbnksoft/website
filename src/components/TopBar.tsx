import React, { memo } from "react";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        {/* ✅ Clickable Email */}
        <div className="topbar-left text-white small">
          <i className="bi bi-envelope-fill me-2"></i>
          <a href="mailto:info@vertixsofttech.in" className="topbar-email">
            info@vertixsofttech.in
          </a>
        </div>

        {/* CTA Button */}
        <a className="btn btn-primary ms-3" href="#contact">
          Build With VertixSoft Tech
        </a>
      </div>
    </div>
  );
};

export default memo(TopBar);
