import ProjectCard from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function project() {
	return (
		<>
			<div>
				<header>
					<Header />
				</header>

				<div className="min-h-screen scroll-smooth bg-[#0f0f0f] text-white px-6 py-10 md:px-20 font-sans">
					<section id="projects" className="max-w-3xl scroll-mt-20 mx-auto">
						<h3 className="text-xl font-semibold text-gray-200 mb-4">
							🚀 Projects
						</h3>
						<div className="flex flex-col gap-6">
							<ProjectCard
								title="Coaching Platform"
								subtitle="The Asian Kid (under Development)"
								description="A full-featured coaching website that connects students and teachers, creating a smooth, engaging learning environment."
								tech={["Next.js", "Tailwind", "postgreSQL", "Node.js"]}
								url=""
							/>
							<ProjectCard
								title="Raj Bihari"
								subtitle="Clothing brand"
								description="Track the time and note down the tasks done during that time."
								tech={["React", "TypeScript", "Tailwind", "nodejs", "mongDB"]}
								url="https://rajbihari.in/"
							/>
							<ProjectCard
								title="Global investor reality"
								subtitle="Real Estate(under development)"
								description="Track the time and note down the tasks done during that time."
								tech={["React", "TypeScript", "Tailwind", "nodejs", "mongDB"]}
								url=""
							/>
						</div>
					</section>
				</div>

				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
