export default function Header() {
	return (
		<header className="bg-[#0f0f0f] text-white py-4 px-6 md:px-12">
			<div className="max-w-4xl mx-auto flex justify-between items-center">
				<a href="./" className="text-lg font-bold cursor-pointer">
					Aditya Pant
				</a>
				<nav className="flex gap-6 text-sm text-gray-300">
					<a href="./" className="hover:text-[#00b4d8]">
						Home
					</a>
					<a href="/projects" className="hover:text-[#00b4d8]">
						Projects
					</a>
					<a href="/about" className="hover:text-[#00b4d8]">
						About
					</a>
				</nav>
			</div>
		</header>
	);
}
