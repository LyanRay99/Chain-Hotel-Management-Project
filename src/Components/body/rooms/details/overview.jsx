import React from "react";

export const Overview = () => {
  return (
    <React.Fragment>
      <div className="overview1">
        <h6 className="overview1__title">
          DE FINIBUS BONORUM ET MALORUM", WRITTEN BY CICERO IN 45 BC
        </h6>
        <p className="overview1__title">
          Located in the heart of Aspen with a unique blend of contemporary
          luxury and historic heritage, deluxe accommodations, superb amenities,
          genuine hospitality and dedicated service for an elevated experience
          in the Rocky Mountains.
        </p>
      </div>

      <div className="overview2">
        <div className="overview2__box">
          <p className="overview2__box__title">SPECIAL ROOM</p>

          <ul>
            <li>Max: 4 Person(s)</li>
            <li>Size: 35 m2 / 376 ft2</li>
            <li>View: Ocen</li>
            <li>Bed: King-size or twin beds</li>
          </ul>
        </div>

        <div className="overview2__box">
          <p className="overview2__box__title">SERVICE ROOM</p>

          <ul>
            <li>Oversized work desk</li>
            <li>Hairdryer</li>
            <li>Iron/ironing board upon request</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
