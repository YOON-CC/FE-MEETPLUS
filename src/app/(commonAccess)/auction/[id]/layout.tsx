import BackHeader from "@/components/organism/layout/BackHeader";
import Footer from "@/components/organism/layout/Footer";
import BoardDetailBar from "@/components/organism/layout/BoardDetailBar";
import { ReactNode } from "react";
import RQProvider from "./RQProvider";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div>
      <RQProvider>{children}</RQProvider>
    </div>
  );
}
