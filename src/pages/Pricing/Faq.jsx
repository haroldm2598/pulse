import { useSelector } from 'react-redux';

function Faq() {
	const { pricingContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='max-w-7xl mx-auto py-20 px-10 md:px-0'>
			<h1 className='text-5xl font-bold uppercase'>Faq</h1>

			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
				{pricingContent[0].faq?.map((item, index) => (
					<div key={index}>
						<h1 className='font-bold'>{item.title}</h1>
						<p>{item.info}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Faq;
