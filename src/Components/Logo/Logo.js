import React from 'react';
import Tilt from 'react-tilt';
import Lesieurlogo from'./removebg.png';

const Logo = () => {
	return (
		<div>
		<div className='absolute top-1  left-0 bottom-2 ma4 mt0'>
				<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
	 				<div className="Tilt-inner"><img alt='' src={Lesieurlogo} /></div>
	 			</Tilt>
	 	</div>
	 	</div>
	
	);
}
export default Logo;
