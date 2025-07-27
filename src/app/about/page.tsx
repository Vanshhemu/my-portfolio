import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function about() {
	return (
		<>
			<div>
				<Header />
				<section id="about" className="max-w-3xl mx-auto mt-16">
					<h2 className="text-2xl font-semibold mb-6">🧑‍💻 About Me</h2>

					<p className="text-gray-400 mb-6">
						I'm <span className="text-[#f87171] font-medium">Aditya Pant</span>,
						a B.Tech CSE student at{" "}
						<span className="text-[#94d2bd] font-medium">CGC Landran</span> with
						a strong passion for building on the web. I specialize in full stack
						development using tools like TypeScript, JavaScript, React.js,
						Next.js, Tailwind CSS, Node.js, PostgreSQL, and MongoDB.
					</p>
					<p className="text-gray-400 mb-12">
						Outside of tech, I'm an{" "}
						<span className="text-[#f59e0b] font-medium">ex-NCC cadet</span>, a{" "}
						<span className="text-[#f472b6] font-medium">
							basketball player
						</span>
						, and a team member of the{" "}
						<span className="text-[#22d3ee] font-medium">Innovation Club</span>.
						I enjoy team-driven problem solving, and love exploring new places
						while freelancing on web projects to sharpen my skills.
					</p>

					{/* Education */}
					<h3 className="text-xl font-semibold mb-4">🎓 Education</h3>
					<div className="space-y-4 text-gray-300 mb-12">
						<div>
							<p className="font-medium">
								🏫 Chandigarh Group of Colleges, Landran
							</p>
							<p className="text-sm text-gray-400">
								B.Tech, Computer Science and Engineering | 2025 – 2028 | Mohali,
								India
							</p>
						</div>
						<div>
							<p className="font-medium">
								🎓 Chandigarh College of Engineering & Technology (Diploma Wing)
							</p>
							<p className="text-sm text-gray-400">
								Diploma, Computer Science and Engineering | 2022 – 2025 |
								Chandigarh, India
							</p>
						</div>
						<div>
							<p className="font-medium">
								🏫 Kendriya Vidyalaya, Sector 47, Chandigarh
							</p>
							<p className="text-sm text-gray-400">
								10th | 2021 – 2022 | Chandigarh, India
							</p>
						</div>
					</div>

					{/* Volunteering */}
					<h3 className="text-xl font-semibold mb-4">🤝 Volunteering</h3>
					<div className="space-y-6 text-gray-300">
						<div>
							<p className="font-medium">💡 Innovation Club, CCET</p>
							<p className="text-sm text-gray-400 mb-2">
								Team Member | 2023 – 2025 | Chandigarh, India
							</p>
							<ul className="list-disc list-inside text-sm text-gray-400">
								<li>Contributing to tech projects that promote innovation</li>
								<li>Supporting student-led initiatives and events</li>
							</ul>
						</div>

						<div>
							<p className="font-medium">🎖️ NCC Cadet</p>
							<p className="text-sm text-gray-400 mb-2">
								Ex-Cadet | Participated in multiple NCC camps and parades
							</p>
						</div>

						<div>
							<p className="font-medium">🏀 Basketball Player</p>
							<p className="text-sm text-gray-400 mb-2">
								Represented school and college at regional levels in tournaments
							</p>
						</div>
					</div>
					<Footer />
				</section>
			</div>
		</>
	);
}
