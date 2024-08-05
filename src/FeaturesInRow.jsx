import responsive from "/responsive.svg";
import latestbuild from "/latestbuild.svg";
import easytouse from "/easytouse.svg";
export default function FeaturesImg() {
  return (
    <>
      <div className="d-sm-flex pt-5">
        <div className="col text-wrap pt-5 ms-2 text-center">
          <img className="mx-auto d-block" src={responsive} />
          <h2>Fully Responsive</h2>
          <p>This theme will look great on any device,no matter the size!</p>
        </div>
        <div className="col text-wrap pt-5 ms-2 text-center">
          <img className="mx-auto d-block" src={latestbuild} />
          <h2>Newer Features</h2>
          <p>Featuring the latest build of the newer framework!</p>
        </div>
        <div className="col text-wrap pt-5 ms-2 text-center">
          <img className="mx-auto d-block" src={easytouse} />
          <h2>Easy to Use</h2>
          <p>
            Ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
    </>
  );
}