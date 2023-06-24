"use client";

import { LightBanner } from "./components/LightBanner/LightBanner";

const TEXT = "Простите, нет такой страницы";

export default function CustomNotFoundPage(): JSX.Element {
  return <LightBanner text={TEXT} />;
}
