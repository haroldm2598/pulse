import { useSelector } from 'react-redux';
function Story() {
	const { customerContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='neutral300 py-10'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='my-10 text-center text-lg'>
					Have something to say about Pulse? We’d love to hear it.
					<span className='ml-2 text-green-600 font-bold underline hover:text-black'>
						Tell us your story.
					</span>
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					{customerContent[0].story?.map((item, index) => (
						<div
							key={index}
							className='p-4 flex flex-col justify-between gap-5 bg-white border-solid border-2 border-neutral-200'
						>
							<p>{`"${item.comment}"`}</p>
							<h1 className='font-bold'>
								{item.name}
								{item?.site?.length > 0 && (
									<span className='ml-2 text-green-600 underline hover:text-black cursor-pointer'>
										{item?.site}
									</span>
								)}
							</h1>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Story;
