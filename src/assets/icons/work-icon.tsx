import React, { type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function WorkIcon({fill = 'currentColor', secondaryfill, width = '1em', height = '1em', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} width={width} {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M43,33H5c-1.10457,0-2,0.89543-2,2v8c0,1.10457,0.89543,2,2,2h38c1.10457,0,2-0.89543,2-2v-8 C45,33.89543,44.10457,33,43,33z" fill="#444444"/>
		<path d="M32,11c-0.55273,0-1-0.44775-1-1V5H17v5c0,0.55225-0.44727,1-1,1s-1-0.44775-1-1V4c0-0.55225,0.44727-1,1-1 h16c0.55273,0,1,0.44775,1,1v6C33,10.55225,32.55273,11,32,11z" fill="#B3B3B3"/>
		<path d="M45,9H3c-1.10457,0-2,0.89543-2,2v22c0,1.10457,0.89543,2,2,2h42c1.10457,0,2-0.89543,2-2V11 C47,9.89543,46.10457,9,45,9z" fill="#636363"/>
		<path d="M28,39h-8c-0.55228,0-1-0.44772-1-1v-6c0-0.55228,0.44772-1,1-1h8c0.55228,0,1,0.44772,1,1v6 C29,38.55228,28.55228,39,28,39z" fill="#EFD358"/>
	</g>
</svg>
	);
}

export default WorkIcon;