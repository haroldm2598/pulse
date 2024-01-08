import { useSelector } from 'react-redux';

import Info from '../../components/Info';

import animationData from '../../assets/images/animations/projections.json';
import GridContent from '../../components/GridContent';

function Projections() {
	const { featuresContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='bg--greenWhite min-h-full py-10'>
			<div className='max-w-6xl mx-auto'>
				<Info title='Share your projections.' animationData={animationData} />
				<GridContent data={featuresContent[0].projections} />
			</div>
		</section>
	);
}

export default Projections;
