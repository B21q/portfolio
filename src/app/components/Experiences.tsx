import dynamic from "next/dynamic";

function Experiences() {
	return (
		<section id="Experiences" className="h-screen flex items-center mx-4 md:mx-8 lg:mx-40 xl:mx-40">
			<div className="">
				<p className="text-2xl font-semibold dark:text-gray-50">Experiences</p>
			</div>
		</section>
	);
}

export default dynamic(() => Promise.resolve(Experiences), { ssr: false });
