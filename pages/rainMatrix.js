import { Button } from "@material-ui/core";
import React, {useRef, useState, useEffect} from "react";
import RainStream from "../components/RainStream";

const MatrixRain = props => {
	const containerRef = useRef(null);
	const [containerSize, setContainerSize] = useState(null); // ?{width, height}

	useEffect(() => {
		const boundingClientRect = containerRef.current.getBoundingClientRect();
		setContainerSize({
			width: boundingClientRect.width,
			height: boundingClientRect.height,
		});
	}, []);

	const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

	return (
        <>
        <Button variant="contained" color="primary" className="btnHome" href="/" >Home</Button>
		<div
			style={{
				background: 'black',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'ignore',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
			ref={containerRef}>
			{new Array(streamCount).fill().map((_ , id) => (
				<RainStream height={containerSize?.height} key={id} />
			))}
		</div>
        </>
	);
};

export default MatrixRain;