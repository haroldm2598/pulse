import { useSelector } from 'react-redux';

import Info from '../../components/Info';

import animationData from '../../assets/images/animations/graphAnimation.json';
import GridContent from '../../components/GridContent';

function Cashflow() {
	const { featuresContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='bg--greenWhite min-h-full py-10'>
			<div className='max-w-6xl mx-auto'>
				<Info
					title='Visualize your income and expenses.'
					animationData={animationData}
				/>
				<GridContent data={featuresContent[0].visualize} />
			</div>
		</section>
	);
}

export default Cashflow;
