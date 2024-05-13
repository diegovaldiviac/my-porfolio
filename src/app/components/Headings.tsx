import { ReactNode } from "react";

function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="py-4 text-4xl font-bold text-white-600 drop-shadow-md sm:text-5xl lg:py-6 text-white">
      {children}
    </h1>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-bold tracking-wide text-white-600 dark:text-white ">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="py-1 text-xl text-white-600 dark:text-white">
      {children}
    </h3>
  );
}

function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="py-1 text-lg text-white-600 lg:text-nowrap dark:text-white">
      {children}
    </h4>
  );
}

function H5({ children }: { children: ReactNode }) {
  return (
    <h5 className="py-1 text-sm text-white-600 dark:text-white">
      {children}
    </h5>
  );
}

export { H1, H2, H3, H4, H5 };