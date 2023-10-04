import dynamic from "next/dynamic";

function Footer() {
	return (
		<section className="flex items-center mx-4 md:mx-8 lg:mx-40 xl:mx-40">
				<p className="text-base font-sora font-medium dark:text-gray-50 flex mx-auto text-center p-2">Copyright © 2021 B21 All rights reserved.</p>
		</section>
	);
} 
export default dynamic(() => Promise.resolve(Footer), { ssr: false });
