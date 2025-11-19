function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <div>© {new Date().getFullYear()} Ascendia</div>
        <nav className="flex items-center gap-6">
          <a href="#courses" className="hover:text-neutral-700">Courses</a>
          <a href="#why" className="hover:text-neutral-700">Why us</a>
          <a href="#" className="hover:text-neutral-700">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
