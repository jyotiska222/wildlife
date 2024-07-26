import PropTypes from "prop-types";
import "./Biodiversity.css";

const Biodiversity = ({ className = "" }) => {
  return (
    <div className={`biodiversity ${className}`}>
      <div className="section03">
        <div className="background1" />
        <h3 className="know-about-biodiverbiodiversit">{`KNOW ABOUT BIODIVERBIODIVERSITY & WILDLIFE `}</h3>
      </div>
      <div className="articles">
        <div className="card-in-section-03">
          <img
            className="card-in-section-03-child"
            loading="lazy"
            alt=""
            src="/rectangle-12.svg"
          />
          <div className="article-about-us">{`ARTICLE ABOUT US `}</div>
        </div>
        <div className="questions">
          <div className="question">
            <div className="card-in-section-031">
              <img
                className="card-in-section-03-item"
                loading="lazy"
                alt=""
                src="/rectangle-11.svg"
              />
              <div className="ques-of-the">QUES OF THE DAY</div>
            </div>
            <div className="answer">
              <div className="bottom-inside-quies-box">
                <div className="elements">
                  <div className="placeholders3" />
                  <div className="placeholders4" />
                </div>
                <div className="answer-earn">{`Answer & Earn points`}</div>
              </div>
            </div>
          </div>
        </div>
        <button className="bottom-inside-article-box">
          <div className="background2" />
          <div className="know-more">Know More</div>
        </button>
      </div>
    </div>
  );
};

Biodiversity.propTypes = {
  className: PropTypes.string,
};

export default Biodiversity;
