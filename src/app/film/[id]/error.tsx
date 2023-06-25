"use client";
import { LightBanner } from "@/app/components/LightBanner/LightBanner";

const ERROR_BANNER = "Простите, что-то пошло не так :(";

export default function Error(): JSX.Element {
  return <LightBanner text={ERROR_BANNER} />;
}
