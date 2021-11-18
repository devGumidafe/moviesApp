import "../../scss/page-header.scss";
import bg from "../../assets/footer-bg.jpg";

export const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};
