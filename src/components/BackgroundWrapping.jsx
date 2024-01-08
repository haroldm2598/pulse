function BackgroundWrapping({ customHeight }) {
	return (
		<section
			className={`absolute top-0 z-[-1] w-full min-h-[32rem] ${customHeight} bg--greenWhite`}
		></section>
	);
}

export default BackgroundWrapping;
