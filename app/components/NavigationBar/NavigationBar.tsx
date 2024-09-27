export default function NavigationBar() {
  const navigation = [
    { name: "dashboard", href: "#", current: true },
    { name: "teams", href: "#", current: false },
    { name: "project", href: "#", current: false },
    { name: "calendar", href: "#", current: false },
  ];

  return (
    <div className={`flex mx-20 gap-16`}>
      {navigation.map((item) => {
        return (
          <a
            key={item.name}
            className={`font-medium text-tbase ${
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
