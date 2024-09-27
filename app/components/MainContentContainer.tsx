export default function MainContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-8 ">{children}</div>;
}
