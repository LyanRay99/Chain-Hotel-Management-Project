import React from "react";

export const Package = () => {
  return (
    <React.Fragment>
      <PackageChild />
      <PackageChild />
      <PackageChild />
    </React.Fragment>
  );
};

const PackageChild = () => {
  return (
    <div className="package">
      <div className="package1">
        <p className="overview1__title">PACKAGE STANDAR</p>
        <p className="overview1__content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>

      <div className="package2">
        <p>
          <span className="package2__price">$260</span>/ Package
        </p>
        <button>BOOK PACKIT</button>
      </div>
    </div>
  );
};
