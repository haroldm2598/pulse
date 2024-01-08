import { useSelector } from 'react-redux';

import Info from '../../components/Info';

import animationData from '../../assets/images/animations/visualizeAnimation.json';
import GridContent from '../../components/GridContent';

function Cashflow() {
	const { featuresContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='neutral300 min-h-full py-10'>
			<div className='max-w-6xl mx-auto'>
				<Info title='Manage your cash flow.' animationData={animationData} />
				<GridContent data={featuresContent[0].cashflow} />
			</div>
		</section>
	);
}

export default Cashflow;
