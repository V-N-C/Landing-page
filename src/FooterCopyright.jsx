import "./App.css";
import facebook from "/facebook.svg";
import twitter from "/twitter.svg";
import insta from "/insta.svg";
export default function Footercopyright() {
  return (
    <>
      <div className="p-5 d-sm-flex">
        <div className="col h-100 text-center text-lg-start my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">.</li>

            <li className="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li className="list-inline-item">.</li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
            <li className="list-inline-item">.</li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <div>© Your Website 2024. All Rights Reserved.</div>
        </div>
        <div className="col h-100 text-center my-auto ps-5 pt-5">
        <ul className="list-inline mb-0">
          <li className="list-inline-item me-4">
          <img src={facebook} alt="FB" />
          </li>
          <li className="list-inline-item me-4">
          <img src={twitter} alt="twitter" />
          </li>
          <li className="list-inline-item me-4">
          <img src={insta} alt="insta" />
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}