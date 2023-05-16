import { useState } from "react";

const yogaPosesData = [
  { src: "#", description: "1. Describing the pose" },
  { src: "#", description: "2. History of the pose" },
  { src: "#", description: "3. Context around the pose" },
];

const showNextPose = (index) => {
  if (index === yogaPosesData.length - 1) return 0;
  return ++index;
};

export default function Home() {
  const [currentArrayIndex, setArrayIndex] = useState(0);

  const handleShowNextImage = () => {
    setArrayIndex(showNextPose(currentArrayIndex));
    return;
  };

  return (
    <section>
      <div>
        <h1>Yoga Poses</h1>
        <p>View random yoga poses with the click of a button.</p>
      </div>

      <div>
        <img src={yogaPosesData[currentArrayIndex].src} />
      </div>

      <div>
        <p>{yogaPosesData[currentArrayIndex].description}</p>
        <button type="button" onClick={handleShowNextImage}>
          Next
        </button>
      </div>
    </section>
  );
}
