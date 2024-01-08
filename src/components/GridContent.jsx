function GridContent({ data }) {
	return (
		<div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{data?.map((item, index) => (
				<div key={index} className='px-4 lg:px-0'>
					<h1 className='text-xl font-bold'>{item.title}</h1>
					<p className='text-lg'>{item.content}</p>
				</div>
			))}
		</div>
	);
}

export default GridContent;
