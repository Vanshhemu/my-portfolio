import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-[#0f0f0f] text-white py-4 px-4 sm:px-6 md:px-12">
			<div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
				<Link href="/" className="text-lg font-bold cursor-pointer">
					Vansh Kumar
				</Link>
				<nav className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-300 justify-center sm:justify-end">
					<Link href="/ " className="hover:text-[#00b4d8] transition-colors">
						Home
					</Link>
					<Link
						href="/projects"
						className="hover:text-[#00b4d8] transition-colors"
					>
						Projects
					</Link>
					<Link
						href="/about"
						className="hover:text-[#00b4d8] transition-colors"
					>
						About
					</Link>
				</nav>
			</div>
		</header>
	);
}
