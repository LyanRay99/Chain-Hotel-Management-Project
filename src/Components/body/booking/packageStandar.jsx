export const PackageStandar = (props) => {
  return (
    <div className="packageBox">
      <div className="packageBox__image">
        <img
          src={require(`../../../Assets/${props.item.image}`)}
          alt={props.item.type}
        ></img>
      </div>

      <div className="packageBox__content">
        <p>PACKAGE STANDAR</p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>

      <div className="packageBox__price">
        <p>$330</p>
        <button>Book Package</button>
      </div>
    </div>
  );
};
