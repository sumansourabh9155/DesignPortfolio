import suman from "../../assets/images/suman.jpg";

export const AboutMe = () => {
	return (
		<div>
			<div className="container flex flex-col px-5 py-4 mx-auto  md:py-16 md:flex-row md:items-center scroll-smooth">
				<div className="flex items-center justify-center w-full md:w-1/2">
					<img
						className="object-cover h-{100px}  rounded-2xl shadow-md shadow-gray-200"
						src={suman}
						alt="Suman Sourabh"
					></img>
				</div>
				<div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
					<div className="max-w-lg md:mx-12 md:order-2">
						<p className="leading-relaxed opacity-50 ">About Me </p>
						<h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl  font-bold ">
							Suman Sourabh
						</h1>
						<p className="mb-8 leading-relaxed opacity-50 ">
							Currently student of Graduation{" "}
						</p>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							My goal is to create a user experience that is both aesthetically
							pleasing and functionally efficient. I have an eye for detail and
							always strive to implement the latest design trends. I take the
							time to research the event and the target audience and create a
							design that meets the specific needs of the event and its users. I
							also work closely with the event organizers to ensure that the
							design I deliver is what they have in mind.
						</p>
						<div className="mt-6">
							<a
								href="#_"
								className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-black rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
							>
								Sign Up
							</a>
						</div>
					</div>
					<div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
						<button className="w-3 h-3 mx-2 bg-black rounded-full md:mx-0 focus:outline-none"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:black"></button>
					</div>
				</div>
			</div>

			{/* <ol class="relative border-l border-gray-200 dark:border-gray-700">
				<li class="mb-10 ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Application UI v2.0.0{" "}
						<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
							Latest
						</span>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on January 13th, 2022
					</time>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts,
						kanban board, calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
						href="#"
						class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
					>
						<svg
							class="w-4 h-4 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
								clip-rule="evenodd"
							></path>
						</svg>{" "}
						Download ZIP
					</a>
				</li>
				<li class="mb-10 ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Figma v1.3.0
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on December 7th, 2021
					</time>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we
						keep a parity between the two versions even as we update the
						project.
					</p>
				</li>
				<li class="ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Library v1.2.2
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on December 2nd, 2021
					</time>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li>
			</ol> */}
		</div>
	);
};
