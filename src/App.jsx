import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import Features from './pages/Features';
import Customer from './pages/Customer';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';

import './assets/styles/main.scss';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Features />} />
				<Route path='/customer' element={<Customer />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/blog' element={<Blog />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
