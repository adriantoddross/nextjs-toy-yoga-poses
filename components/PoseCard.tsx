import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { useState } from "react";
import Sidebar from "components/Sidebar";

type Pose = {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
};

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
