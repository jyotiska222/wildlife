import Content from "../components/Content";
import Events from "../components/Events";
import Biodiversity from "../components/Biodiversity";
import "./Root.css";

const Root = () => {
  return (
    <div className="root">
      <main className="full-page">
        <section className="home-page1">
          <Content />
          <div className="section-1">
            <div className="section-1-child" />
            <img
              className="s20-s1470160x20308530-gr5-1-icon"
              loading="lazy"
              alt=""
              src="/1s20s1470160x20308530gr5-1@2x.png"
            />
            <div className="description">
              <div className="the-ministry-of">
                The Ministry of Tourism (MOT) of India oversees the promotion
                and development of wildlife sanctuaries. Its website provides
                comprehensive information on various sanctuaries across the
                country, detailing their unique flora and fauna, visitor
                guidelines, and conservation efforts. This resource aids
                tourists in planning eco-friendly and educational trips.
              </div>
            </div>
          </div>
          <Events />
          <Biodiversity />
          <div className="photography">
            <div className="content">
              <div className="section-04">
                <img
                  className="background-icon"
                  alt=""
                  src="/background@2x.png"
                />
                <img
                  className="photographer-taking-photo-wild-icon"
                  loading="lazy"
                  alt=""
                  src="/photographertakingphotowildlifemanwithcameradeernature-64101019408-1@2x.png"
                />
                <div className="best-photo-of">BEST PHOTO OF THE YEAR</div>
                <div className="wildlife-photography-is">
                  Wildlife photography is vital for spreading awareness to save
                  wildlife by showcasing the beauty and plight of endangered
                  species. These compelling images inspire action, educate the
                  public, and highlight conservation efforts, fostering a deeper
                  connection and commitment to protecting our planet's
                  biodiversity and natural habitats.
                </div>
              </div>
              <div className="join">
                <button className="bottom-to-join-us">
                  <div className="background" />
                  <div className="join-us">Join Us</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Root;
