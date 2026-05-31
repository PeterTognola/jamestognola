import React, {type SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function MenuIcon({fill = 'currentColor', secondaryfill, width = '1em', height = '1em', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;
	const css = `.nc-int-menu-to-close-2{--transition-duration:.5s}.nc-int-menu-to-close-2 :nth-child(1),.nc-int-menu-to-close-2 :nth-child(2){transition:opacity 0s calc(var(--transition-duration)/2),transform calc(var(--transition-duration)/2) calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1)}.nc-int-menu-to-close-2 :nth-child(1){transform-origin:16px 9px}.nc-int-menu-to-close-2 :nth-child(2){transform-origin:16px 23px}.nc-int-menu-to-close-2 :nth-child(3),.nc-int-menu-to-close-2 :nth-child(4){transform-origin:50% 50%;transition:transform calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1)}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(1),.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(2){transition:transform calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1),opacity 0s calc(var(--transition-duration)/2);opacity:0}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(1){transform:translateY(7px)}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(2){transform:translateY(-7px)}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(3),.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(4){transition:transform calc(var(--transition-duration)/2) calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1)}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(3){transform:rotate(45deg)}.nc-int-menu-to-close-2.nc-int-icon-state-b :nth-child(4){transform:rotate(-45deg)}`;

	function handleClick(e) {
		let group = e.currentTarget.querySelector('.js-nc-int-icon');
		if(!group) return;
		group.classList.toggle('nc-int-icon-state-b');
		e.currentTarget.dispatchEvent(new Event('ncstatechanged'));
	}

	return (
		<svg onClick={handleClick} height={height} width={width} {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10">
		<g className="js-nc-int-icon nc-int-menu-to-close-2">
			<line fill="none" stroke={fill} strokeWidth="2" x1="2" x2="30" y1="8" y2="8"/>
			<line fill="none" stroke={fill} strokeWidth="2" x1="30" x2="2" y1="24" y2="24"/>
			<line fill="none" stroke={fill} strokeWidth="2" x1="30" x2="2" y1="16" y2="16"/>
			<line fill="none" stroke={secondaryfill} strokeWidth="2" x1="30" x2="2" y1="16" y2="16"/>
		</g>
		<style>{css}</style>
	</g>
</svg>
	);
}

export default MenuIcon;