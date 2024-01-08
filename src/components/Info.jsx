import Lottie from 'lottie-react';

function Info({ title, animationData }) {
	return (
		<div className='px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-between'>
			<h1 className='w-full lg:w-96 text-3xl lg:text-5xl font-bold'>{title}</h1>
			{/* h-96 sa lottie */}
			<div className='w-72 lg:w-[32rem]'>
				<Lottie animationData={animationData} height={100} width={100} />
			</div>
		</div>
	);
}

export default Info;
