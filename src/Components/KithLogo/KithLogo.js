import React from 'react';
import './KithLogo.css';
import styled from 'styled-components';


const Svg = styled.svg`
  width: 100px;
  transition: all .4s ease;
  &:hover{
    fill: magenta;
    transform: translateY(-2px);
  }
`


const KithLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 696 292">
	<title>
		kith-logo
	</title>
	<g id="Layer_2" data-name="Layer 2">
		<g id="Layer_1-2" data-name="Layer 1">
			<g id="DWA4cL">
				<path d="M0,292V0H696V292Zm647.86-45.38V47.27H605.57v76.4H537.3V47.27H495.22V246.55h42.35V163.89h67.48v82.73Zm-438.59.28c-1.52-3-2.53-5.09-3.61-7.13q-29.67-56.06-59.46-112c-1.95-3.65-1.6-6,.84-9.17C159,103.15,170.65,87.55,182.4,72c6.09-8,12.14-16.12,18.68-24.8-2.31-.1-3.73-.22-5.16-.22-13.33,0-26.67.1-40-.09a7.62,7.62,0,0,0-7,3.52q-26.9,35.75-54,71.31c-1,1.34-2.11,2.61-3.17,3.91l-1-.5V47.26H48.53V246.52H91l1-57.36s17.9-26,22.56-31.91c1.26,2.31,2.15,3.89,3,5.51q20.88,40.08,41.82,80.11c.86,1.64,2.81,3.83,4.28,3.86C178.54,247,193.49,246.9,209.27,246.9ZM318.14,47.12V83.75h50.12V246.59h42.66V83.45H461.3V47.12Zm-74.69,0V246.62h42.18V47.14Z" />
			</g>
		</g>
	</g>
</Svg>
);

export default KithLogo;