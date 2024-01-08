import BackgroundWrapping from '../components/BackgroundWrapping';
import Signup from '../components/Signup';
import Hero from './Customer/Hero';
import Story from './Customer/Story';

function Customer() {
	return (
		<section>
			<BackgroundWrapping customHeight='lg:min-h-[50rem]' />
			<Hero />
			<Story />
			<Signup />
		</section>
	);
}

export default Customer;
