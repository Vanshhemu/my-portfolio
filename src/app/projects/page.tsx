import ProjectCard from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function project() {
	return (
		<>
			<div>
				<Header />
				<div className="min-h-screen scroll-smooth bg-[#0f0f0f] text-white px-6 py-10 md:px-20 font-sans">
					<section id="projects" className="max-w-3xl scroll-mt-20 mx-auto">
						<h3 className="text-xl font-semibold text-gray-200 mb-4">
							🚀 Projects
						</h3>
						<div className="flex flex-col gap-6">
							<ProjectCard
								title="Coaching Platform"
								subtitle="The Asian Kid"
								description="A full-featured coaching website that connects students and teachers, creating a smooth, engaging learning environment."
								tech={["Next.js", "Tailwind", "MongoDB", "Node.js"]}
							/>
							<ProjectCard
								title="Portfolio Website"
								subtitle="Personal Site"
								description="Minimal portfolio site showcasing my work, journey, and contact options. Built with clean design principles."
								tech={["React", "TypeScript", "Tailwind"]}
							/>
						</div>
					</section>
					<Footer />
				</div>
			</div>
		</>
	);
}
