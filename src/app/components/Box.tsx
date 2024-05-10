import { ReactNode } from "react";

function Box(props: { children?: ReactNode }) {
  return (
    <div className="m-2 items-center justify-center rounded-lg bg-white px-5 py-4 shadow-xl dark:bg-white" style={{backgroundColor: "#423a3a"}}>
    {props.children}
    </div>


  );
}

export default Box;