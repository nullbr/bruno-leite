import { PropsWithChildren } from "react";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl whitespace-pre-line py-10">
      {children}
    </div>
  );
};
