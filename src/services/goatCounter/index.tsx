import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

const myWindow: any = window;

export default function GCScript({
  siteUrl,
  scriptSrc
}: {
  siteUrl: string;
  scriptSrc?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!myWindow.goatcounter) return;
      myWindow.goatcounter.count({
        path: url.slice(1),
        event: false
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Script
      data-goatcounter={siteUrl}
      src={scriptSrc ?? "//gc.zgo.at/count.js"}
      strategy='afterInteractive'
    />
  );
}
