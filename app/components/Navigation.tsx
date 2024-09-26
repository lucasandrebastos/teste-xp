export default function Navigation() {
  const navigation = [
    { name: "dashboard", href: "#", current: true },
    { name: "teams", href: "#", current: false },
    { name: "project", href: "#", current: false },
    { name: "calendar", href: "#", current: false },
  ];

  return (
    <div className={`mx-20 gap-y-8`}>
      {navigation.map((item) => {
        return (
          <a
            key={item.name}
            className={`py-1 px-4  font-medium text-white ${
              item.current && " text-indigo-950  "
            } `}
            href={item.href}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
}
