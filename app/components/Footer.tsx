export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} Martin Lupa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
