import HomePage from "@/components/Fragments/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home |  Nguyễn Minh Huy",
  description: "Home - Nguyễn Minh Huy",
};

export default function Home() {
  return <HomePage />;
}
