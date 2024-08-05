import { getImageURL } from "./img-util.js";
import "./App.css";

// Navbar section
export default function LeadSection() {
  return (
    <>
      <div className=" position-relative">
        <img
          src={getImageURL("bg-masthead.jpg")}
          className="imageSize"
          alt="sea background"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="row">
            <div className="row">
              <h1 className="text-wrap text-white ">
                Generate more leads with a professional landing page!
              </h1>
            </div>
            <div className="row p-4">
              <div className="col gap-4 d-flex ">
                <input
                  placeholder="Email Address"
                  type="email"
                  style={{ width: "50%" }}
                  className="form-control form-control-lg"
                />
                <button className="btn btn-primary disabled">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}