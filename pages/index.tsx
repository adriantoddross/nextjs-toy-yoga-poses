import { useState } from "react";
import Image from "next/image";
import { yogaPosesData, showNextPose } from "util/yogaPosesData";

export default function Home() {
  const [currentPoseIndex, setPoseIndex] = useState(0);

  const handleShowNextImage = () => {
    setPoseIndex(showNextPose(currentPoseIndex, yogaPosesData));
    return;
  };

  const { alt, description, src, title } = yogaPosesData[currentPoseIndex];

  return (
    <section>
      <div>
        <h1>Yoga Poses</h1>
        <p>View random yoga poses with the click of a button.</p>
      </div>

      <div>
        <img src={src} alt={alt} />
      </div>

      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={handleShowNextImage}>
          Show next pose
        </button>
      </section>
    </section>
  );
}
