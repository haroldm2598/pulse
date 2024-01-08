import { useSelector } from 'react-redux';

function Hero() {
	const { blogContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='neutral300'>
			<div className='max-w-6xl mx-auto py-4 flex flex-col md:flex-row items-center gap-10'>
				<h1 className='self-start px-4 lg:px-0 text-6xl font-bold'>Blog</h1>

				{/* Gallery */}
				<div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{blogContent?.map((item, index) => (
						<div
							key={index}
							className='w-96 lg:w-72 flex flex-col items-start justify-between'
						>
							<div className='mb-4'>
								<img src={item.image} alt='images' />
								<h6 className='text-sm font-bold uppercase opacity-75'>
									{item.categories}
								</h6>
								<h1 className='text-lg leading-5 font-bold'>{item.title}</h1>
								<p className='leading-5'>{item.description}</p>
							</div>

							<button className='text-sm font-bold text-green-600 underline'>
								{item.btn}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Hero;
