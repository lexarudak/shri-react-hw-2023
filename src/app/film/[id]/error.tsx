"use client";
import { LightBanner } from "@/app/components/LightBanner/LightBanner";

const ERROR_BANNER = "Похоже, такого фильма нет";

export default function Error(): JSX.Element {
  return <LightBanner text={ERROR_BANNER} />;
}
