import { useSelector } from 'react-redux';
import ReactLogo from '../../assets/images/check.svg';

function Hero() {
	const { pricingContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='bg--greenWhite'>
			<div className='max-w-7xl mx-auto'>
				<div className='max-w-xl mx-auto px-5 lg:px-0 py-5 text-start lg:text-center'>
					<h1 className='text-5xl lg:text-6xl font-bold'>
						Try Pulse free for 30 days.
					</h1>
					<h2 className='mt-5'>
						See why Pulse is the best way to monitor your cash flow. Sign up for
						any plan and try Pulse absolutely free for 30 days.
					</h2>
				</div>
			</div>

			{/* Pricing Grid */}
			<div className='max-w-7xl mx-auto p-10 grid grid-cols-1 lg:grid-cols-3 items-center'>
				{pricingContent[0].introPricing?.map((item, index) => (
					<div key={index}>
						<h1 className='text-green-600 font-bold'>{item.title}</h1>
						{item.content?.map((contents, index) => (
							<ul key={index} className='flex items-center list-disc'>
								<li>{contents}</li>
							</ul>
						))}

						<div>
							<h1>{item.info}</h1>
							<h1>{item.button}</h1>
						</div>
					</div>
				))}

				{pricingContent[0].pricing?.map((item, index) => (
					<div
						key={index}
						className={`${item.borderStyle} relative bg-white border-solid py-10 overflow-hidden`}
					>
						<div className='w-full absolute top-0 rounded-xl'>
							<h1 className='py-2 text-center bg-green-500 text-white'>
								{item.info}
							</h1>
						</div>

						<div className='w-48 mx-auto mt-10 px-2 text-center [&>*]:mb-4'>
							<h1 className='text-green-600 text-5xl font-bold'>
								{item.title}
							</h1>
							<h2 className='text-2xl opacity-60'>{item.price}</h2>
							<button className='w-full btn btn-success'>{item.btn}</button>
							<h2 className='text-sm font-semibold uppercase'>
								{item.titleInfo}
							</h2>
						</div>

						{item.infoContent?.map((contents, index) => (
							<ul key={index} className='px-2 flex items-start'>
								<img src={ReactLogo} alt='check' className='mt-2 mr-2' />
								<li>{contents}</li>
							</ul>
						))}
					</div>
				))}
			</div>

			<div className='max-w-4xl mx-auto py-10 text-center'>
				<h1 className='text-2xl'>
					“Pulse is worth every penny because it empowers business owners with
					critical financial insight and knowledge.”
				</h1>
				<h6 className='text-sm font-semibold text-green-600'>
					SUBVERT MARKETING, INC.
				</h6>
			</div>
		</section>
	);
}

export default Hero;
