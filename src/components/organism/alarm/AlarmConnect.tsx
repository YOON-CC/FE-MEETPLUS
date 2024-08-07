"use client";

import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { IoSearchOutline } from "react-icons/io5";
import styles from "@/styles/layout/header.module.scss";
import Logo from "@/asset/svgs/Logo";
import { GoBell } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { EventSourcePolyfill } from "event-source-polyfill";
import { sessionValid } from "@/utils/session/sessionValid";

export default function AlarmConnect() {
  const pathName = usePathname();

  const [count, setCount] = useState(0);
  const eventSource = useRef<null | EventSource>(null);

  useEffect(() => {
    const checkSessionAndFetchSSE = async () => {
      const session = await sessionValid();

      if (session) {
        const fetchSSE = () => {
          eventSource.current = new EventSourcePolyfill(
            `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/notification-service/api/v1/alarm/stream-notifications`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${session.authorization}`,
                uuid: `${session.uuid}`,
              },
            }
          );

          eventSource.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setCount(data.alarmCount);
          };

          eventSource.current.onerror = () => {
            eventSource.current?.close();
            setTimeout(fetchSSE, 3000);
          };

          eventSource.current.onopen = (event) => {
            console.log("onopen");
          };
        };

        fetchSSE();
      }
      console.log("안녕");
    };

    checkSessionAndFetchSSE();

    return () => {
      eventSource.current?.close();
    };
  }, []);

  return (
    <>
      <Logo />
      <div className={styles["header-element-container"]}>
        {pathName === "/" && (
          <>
            <Link href="/search">
              <IoSearchOutline size={30} color="white" />
            </Link>
            <Link href="/alarm">
              <GoBell size={30} color="white" />
            </Link>
            {count > 0 && <div className={styles["alarm"]}></div>}
          </>
        )}
        {pathName !== "/" && (
          <>
            <Link href="/search">
              <IoSearchOutline size={30} />
            </Link>
            <Link href="/alarm">
              <GoBell size={30} />
            </Link>
            {count > 0 && <div className={styles["alarm"]}></div>}
          </>
        )}
      </div>
    </>
  );
}
