import { useState } from "react";
import Image from "next/image";
import { yogaPosesData, showNextPose } from "util/yogaPosesData";

export default function YogaPoses() {
  const [currentPoseIndex, setPoseIndex] = useState(0);

  const handleShowNextImage = () => {
    setPoseIndex(showNextPose(currentPoseIndex, yogaPosesData));
    return;
  };

  const { alt, description, src, title } = yogaPosesData[currentPoseIndex];

  return (
    <section>
      <div>
        <img src={src} alt={alt} />
      </div>

      <section className="flex flex-col space-y-2">
        <h2 className="text-xl font-bold pt-2">{title}</h2>
        <p className="">{description}</p>
        <button
          type="button"
          onClick={handleShowNextImage}
          className="border p-2"
        >
          Show next pose
        </button>
      </section>
    </section>
  );
}
