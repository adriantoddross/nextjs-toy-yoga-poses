import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { useState } from "react";
import Sidebar from "components/Sidebar";

export default function PoseCard({ title }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
