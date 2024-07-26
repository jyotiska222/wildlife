import PropTypes from "prop-types";
import "./Section04.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section-04 ${className}`}>
      <img className="background-icon" alt="" src="/background@2x.png" />
      <img
        className="photographer-taking-photo-wild-icon"
        loading="lazy"
        alt=""
        src="/photographertakingphotowildlifemanwithcameradeernature-64101019408-1@2x.png"
      />
      <div className="best-photo-of">BEST PHOTO OF THE YEAR</div>
      <div className="wildlife-photography-is">
        Wildlife photography is vital for spreading awareness to save wildlife
        by showcasing the beauty and plight of endangered species. These
        compelling images inspire action, educate the public, and highlight
        conservation efforts, fostering a deeper connection and commitment to
        protecting our planet's biodiversity and natural habitats.
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
