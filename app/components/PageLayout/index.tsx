export const PageLayout = ({
  children,
  cls,
}: {
  children: React.ReactNode;
  cls?: string;
}) => {
  return (
    <div className="mx-auto min-h-[100svh] max-w-3xl animate-fade-right whitespace-pre-line px-6 py-20 text-neutral-400">
      {children}
    </div>
  );
};
