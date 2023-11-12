import { Logo } from "@pmndrs/branding";
import { useSnapshot } from "valtio";
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineHighlight,
  AiOutlineShopping,
} from "react-icons/ai";
import { state } from "./store";

export const Overlay = () => {
  const snap = useSnapshot(state);
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <AiOutlineShopping size="3em" />
      </header>

      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  );
};

const Intro = () => {
  return (
    <section key="main">
      <div className="section--container">
        <div>
          <h1>LET'S DO IT</h1>
        </div>
        <div className="support--content">
          <div>
            <p>
              Create your unique and exclusive t-shirt with our brand-new 3D
              customization tool. <strong>Unleash your imagination</strong>
              and define your own style.
            </p>
          </div>
          <button
            style={{ background: "black" }}
            onClick={() => {
              state.intro = false;
            }}
          >
            CUSTOMIZE NOW <AiOutlineHighlight size="1.3em" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <section key="customs">
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => {
                state.selectedColor = color;
              }}
            />
          ))}
        </div>
      </div>

      <div className="decals">
        <div className="decals--container">
          {snap.decals.map((decal) => (
            <div
              key={decal}
              className="decal"
              onClick={() => {
                state.selectedDecal = decal;
              }}
            >
              <img src={decal + "_thumb.png"} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      <button
        className="share"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
        <AiFillCamera size="1.3em" />
      </button>
      <button
        className="exit"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          state.intro = true;
        }}
      >
        GO BACK
        <AiOutlineArrowLeft size="1.3em" />
      </button>
    </section>
  );
};
