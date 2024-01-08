import { useSelector } from 'react-redux';
import ReactLogo from '../assets/images/pulseLogo.svg?react';

function Footer() {
	const { footerLinks } = useSelector((state) => state.pulseTemplate);

	return (
		<footer className='footerBg max-w-full'>
			<section className='max-w-7xl mx-auto md:px-10 md:py-20'>
				<div className='pt-10 lg:pt-0 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0'>
					<div>
						<ReactLogo />
						<button className='mt-10 btnFooterEffect font-bold'>
							Sign Up for a Free 30-days Trial
						</button>
					</div>

					<div className=' flex flex-row gap-2 md:gap-20'>
						{footerLinks?.map((item, index) => (
							<div key={index}>
								<h1 className='mb-2 text-lg md:text-xl font-bold text-white'>
									{item.title}
								</h1>
								{item.links?.map((link, index) => (
									<h2
										key={index}
										className='w-18 md:w-full mb-2  text-base md:text-lg'
									>
										{link}
									</h2>
								))}
							</div>
						))}
					</div>
				</div>

				<div className='footerBg__credit mt-20 text-xs opacity-70'>
					<h6>
						©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use |
						Privacy Policy | EU Privacy
					</h6>
					<h6>
						Pulse is made by Simple Focus. We also make Ballpark, Sifter, and
						Curated.
					</h6>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
