import { DotLottie } from "@lottiefiles/dotlottie-web";

const App = () => {
  const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector("#dotlottie-canvas"),
    src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie", // or .json file
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
