import videoHomepage from "../../assets/videohomepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <div className="homepage-content-title">
          Make forms worth filling out
        </div>
        <div className="homepage-content-text">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be <p>refreshingly different.</p>
        </div>
        <div>
          <button className="btn-getfree">Get started—it's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

// mutes : tắt âm thanh của video
// loop : lặp vô hạn video
