
const Blogs =()=>{
    return(
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Our recent news</h2>
			<p className="font-serif text-sm dark:text-gray-600">Good news is rare these days, and every glittering ounce of it should be cherished and hoarded and worshipped and fondled like a priceless diamond..</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-685605,resizemode-75,msid-112374201/jobs/hr-policies-trends/it-hiring-likely-to-grow-by-8-5-pc-by-next-year-as-demand-grows-report.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Increased Job Openings in Tech Sector"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Tech Radar</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Increased Job Openings in Tech Sector</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 1, 2024</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://media.licdn.com/dms/image/D5612AQH8ftYCNBs34A/article-cover_image-shrink_600_2000/0/1710395938817?e=2147483647&v=beta&t=Xj6GEzxyNSIl7cmH5PDlrZ2HjcFZyZ2awOjCMw3EcA4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Remote Work Trends Continue"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Pc World</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Remote Work Trends Continue</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 2, 2024</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://jobfairindia.in/assets/img/slider/slider-index7.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Upcoming Career Fair"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Tech Crunch</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Upcoming Career Fair</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 3, 2024</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="tips">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUzPcaYbGEtasscz5EpnFuE4bMnYreGDB4Q&s" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Tips for Navigating Job Interviews"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Digital Trends</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Tips for Navigating Job Interviews</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 4, 2024</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    )
}
export default Blogs