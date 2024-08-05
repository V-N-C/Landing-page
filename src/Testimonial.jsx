import "./App.css";
import { getImageURL } from "./img-util";
import { ImageName } from "./ImageData";

const Testimonials = () => {
  return (
    <>
      <div className="row text-center pt-5 mt-5 fontSize">
        <h3>What People are saying...</h3>
      </div>
      <div className="d-sm-flex pt-5">
        {ImageName.map((img) => (
          <div className="col" key={img.id}>
            <img
              className="img-fluid img-thumbnail mx-auto d-block rounded-circle mb-3"
              src={getImageURL(`${img.featuresImg1}`)} 
              style={{width: '50%'}}
            />
            <h3 className="text-center">{img.name}</h3>
            <p className="fontSize text-center">{img.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Testimonials;