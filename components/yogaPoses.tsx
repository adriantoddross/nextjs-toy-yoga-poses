import { useState } from "react";
import Image from "next/image";
import { yogaPosesData, showNextPose } from "util/yogaPosesData";
import { gql, useQuery } from "@apollo/client";

export default function YogaPoses() {
  const GET_POSES = gql`
    query GetPoses {
      poses {
        id
        created_at
        image
        subtitle
        title
        difficulty
      }
    }
  `;

  const { loading, error: QueryError, data } = useQuery(GET_POSES);

  const [currentPoseIndex, setPoseIndex] = useState(0);

  const handleShowNextImage = () => {
    setPoseIndex(showNextPose(currentPoseIndex, data?.poses));
    return;
  };

  return (
    <section>
      {/* <div>
        <img src={src} alt={alt} />
      </div> */}

      {data?.poses && (
        <section className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold pt-2">
            {data?.poses[currentPoseIndex].title}
          </h2>
          {data?.poses[currentPoseIndex].subtitle && (
            <p className="">{data?.poses[currentPoseIndex].subtitle}</p>
          )}
          <button
            type="button"
            onClick={handleShowNextImage}
            className="border p-2"
          >
            Show next pose
          </button>
        </section>
      )}
    </section>
  );
}
