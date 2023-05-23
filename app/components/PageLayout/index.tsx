export const PageLayout = ({
  children,
  cls,
}: {
  children: React.ReactNode;
  cls: string;
}) => {
  return (
    <div className="mx-auto min-h-screen max-w-3xl whitespace-pre-line px-4 py-20 text-neutral-400">
      {children}
    </div>
  );
};
