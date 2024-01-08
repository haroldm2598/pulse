import { useSelector } from 'react-redux';

function Hero() {
	const { customerContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='max-w-6xl mx-auto px-2 py-10 md:px-0 bg--greenWhite'>
			<h1 className='text-5xl md:text-6xl font-bold text-start lg:text-center'>
				See What Our Customers Are Saying About Pulse.
			</h1>

			<div className='my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10'>
				{customerContent[0]?.customerFeedback?.map((item, index) => (
					<div key={index} className='flex flex-col justify-between gap-4'>
						<div>
							<img
								src={item.image}
								alt='person image'
								className='w-44 h-44 object-cover rounded-full mx-auto'
							/>
							<h1 className='mt-2 text-base'>{`"${item.comment}"`}</h1>
						</div>

						<div>
							<h2 className='text-sm font-bold'>{item.help}</h2>
							<button className='text-green-600 font-bold underline hover:text-black'>
								{item.button}
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Hero;
