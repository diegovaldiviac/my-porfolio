"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function VisitCounter() {
  const t = useTranslations("visits");
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.count !== null) {
          setCount(data.count);
          setTimeout(() => setVisible(true), 50);
        }
      })
      .catch(() => {});
  }, []);

  if (count === null) return <div className="w-24 h-6" />;

  return (
    <div className={`group relative transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
      <div className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 cursor-default dark:border-orange-800 dark:bg-orange-950 dark:text-orange-400">
        <FontAwesomeIcon icon={faEye} className="text-blue-400 dark:text-orange-500" width={12} />
        <span>{count + 150} {t("label")}</span>
      </div>
      <div className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-700">
        {t("tooltip")}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800 dark:border-b-gray-700" />
      </div>
    </div>
  );
}
