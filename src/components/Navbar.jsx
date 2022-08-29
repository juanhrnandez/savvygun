import NextLink from 'next/link';
const navigation = [
    { name: "Enfoque", href: "#", current: true },
    { name: "Soluciones", href: "#about", current: false },
    { name: "Experiencia", href: "#projects", current: false },
  ];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img src="/logo.svg" alt="logo" className="w-24 h-24" />
      <ul className="flex gap-x-16 text-2xl items-center">
        {navigation.map((item) => (
          <li key={item.name}>
            <NextLink href={item.href} className={item.current ? "active" : ""}>
              {item.name}
            </NextLink>
          </li>
        ))}
        <li className="px-4 py-1 border border-amarillo">
          <a href="/contacto">¡Contratanos!</a>
        </li>
      </ul>
    </nav>
  );
}
