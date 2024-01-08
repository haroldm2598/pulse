import { useSelector } from 'react-redux';

import Info from '../../components/Info';

import animationData from '../../assets/images/animations/accountAnimation.json';
import GridContent from '../../components/GridContent';

function Account() {
	const { featuresContent } = useSelector((state) => state.pulseTemplate);

	return (
		<section className='min-h-full py-10'>
			<div className='max-w-6xl mx-auto'>
				<Info
					title='Connect your accounting software.'
					animationData={animationData}
				/>
				<GridContent data={featuresContent[0].account} />
			</div>
		</section>
	);
}

export default Account;
