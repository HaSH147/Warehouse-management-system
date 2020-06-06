import React from'react';
import Navigationcss from './Navigation.css'
const Navigation = ({ onRouteChange }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end',position: 'avsolute', top: '0em', right: '0em' }}>
			<p onClick={() => onRouteChange('signin')} className='fit f3 link dim black underline pa3 pointer top'>Sign Out</p>
		</nav>
	);
}
export default Navigation;