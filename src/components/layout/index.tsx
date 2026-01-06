import LayoutFooter from "./footer";
import LayoutMain from "@/components/layout/main";
import LayoutHeader from "./header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
      <LayoutFooter />
    </>
  );
}
