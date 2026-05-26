import { ReactNode } from "react";

function Box(props: { children?: ReactNode }) {
  return (
    <div className="m-2 items-center justify-center rounded-lg bg-gray-100 dark:bg-[#423a3a] px-6 py-8 shadow-xl">
      {props.children}
    </div>
  );
}

export default Box;
