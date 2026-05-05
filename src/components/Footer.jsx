export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center text-gray-600 text-sm">
      <p>
        © {new Date().getFullYear()} Viviana Londono — Desarrollado con React &amp; Tailwind CSS
      </p>
    </footer>
  );
}
