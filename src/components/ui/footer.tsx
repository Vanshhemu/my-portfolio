export default function Footer() {
	return (
		<>
			<div>
				{/* CTA */}
				<p className="mt-8 text-sm text-gray-400">
					Want to collaborate or just say hi?{" "}
					<a
						href="mailto:pantanupam05@gmail.com?subject=Hello%20Aditya"
						className="text-[#00b4d8] underline"
					>
						Let’s connect.
					</a>
				</p>
				<div className="flex gap-5 mt-6 text-xl text-gray-400">
					<a
						href="https://x.com/adityapant_"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#1d9bf0] transition"
					>
						<span className="sr-only">X (Twitter)</span>
						<i className="fa-brands fa-x-twitter"></i>
					</a>
					<a
						href="https://www.instagram.com/adityapant_/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#e1306c] transition"
					>
						<span className="sr-only">Instagram</span>
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/aditya-pant-948a4b287/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#0a66c2] transition"
					>
						<span className="sr-only">LinkedIn</span>
						<i className="fa-brands fa-linkedin-in"></i>
					</a>
					<a
						href="https://github.com/AdityaaPant"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#f5f5f5] transition"
					>
						<span className="sr-only">GitHub</span>
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
			</div>
		</>
	);
}
