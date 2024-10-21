"use client";
import { useState } from "react";
import MainMedia from "./mainMedia";
import MediaResources from "./mediaResource";

export default function MediaContainer() {
  const [isMediaResources, setIsMediaResources] = useState<boolean>(false);
  return isMediaResources ? (
    <MediaResources setIsMediaResources={setIsMediaResources} />
  ) : (
    <MainMedia setIsMediaResources={setIsMediaResources} />
  );
}
