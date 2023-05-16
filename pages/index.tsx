import { useState } from "react";
import Image from "next/image";

const yogaPosesData = [
  {
    alt: "Woman demonstrating downward dog pose",
    description: "This is the Downward Dog pose! Check it out!",
    src: "/pose-downwardDog.webp",
  },
  {
    alt: "Woman standing up straight with arms at side and palms facing inner-thighs",
    description: "Get sturdy with the Mountain pose!",
    src: "/pose-mountain.webp",
  },
  {
    alt: "Woman demonstrating warrior pose",
    description:
      "War. War never changes. Neither does the classic Warrior One pose!",
    src: "/pose-warriorOne.webp",
  },
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
        <img
          src={yogaPosesData[currentArrayIndex].src}
          alt={yogaPosesData[currentArrayIndex].alt}
        />
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
