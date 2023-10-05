import dynamic from "next/dynamic";

function Experiences() {
	return (
		<section id="Experiences" className="h-max flex items-center mx-4 md:mx-8 lg:mx-40 xl:mx-40">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div>
					<p className="text-2xl font-semibold dark:text-gray-50">Experiences</p>
					<span></span>
				</div>
			</div>
		</section>
	);
}

export default dynamic(() => Promise.resolve(Experiences), { ssr: false });
