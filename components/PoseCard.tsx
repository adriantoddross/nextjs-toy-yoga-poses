import { Pose } from "lib/typeDefs/types";

type Props = {
  pose: Pose;
};

export default function PoseCard({ pose }: Props) {
  const { title, subtitle, image_url } = pose;
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
      <img src={image_url} />
    </div>
  );
}
