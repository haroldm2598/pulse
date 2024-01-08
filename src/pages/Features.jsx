import BackgroundWrapping from '../components/BackgroundWrapping';
import IntroTitle from './Features/IntroTitle';
import Cashflow from './Features/Cashflow';
import Visualize from './Features/Visualize';
import Signup from '../components/Signup';
import Account from './Features/Account';
import Projections from './Features/Projections';

function Features() {
	return (
		<section>
			<BackgroundWrapping />
			<IntroTitle />
			<Cashflow />
			<Visualize />
			<Signup />
			<Account />
			<Projections />
			<Signup />
		</section>
	);
}

export default Features;
