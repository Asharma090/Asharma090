import React from 'react';
import style from './browserpros.module.scss';
import Image from 'next/image';
import pros1 from '../../../public/images/pros1.png';
import pros2 from '../../../public/images/pros2.png';
import pros3 from '../../../public/images/pros3.png';
import pros4 from '../../../public/images/pros4.png';
import pros5 from '../../../public/images/pros5.png';
import pros6 from '../../../public/images/pros6.png';


export default function index() {
  return (
    <div className={style['browser-pros']}>
		<div className={'container'}>
			<h2>Browse Pros in Your Area</h2>
			<ul>
				<li>
					<Image src={pros1} alt="pros" />
					<h3>Bathroom Renovation</h3>
				</li>
				<li>
					<Image src={pros2} alt="pros" />
					<h3>Basement Renovation</h3>
				</li>
				<li>
					<Image src={pros3} alt="pros" />
					<h3>Landscape Contractors & Designers</h3>
				</li>
				<li>
					<Image src={pros4} alt="pros" />
					<h3>Roofing</h3>
				</li>
				<li>
					<Image src={pros5} alt="pros" />
					<h3>Handyman Services</h3>
				</li>
				<li>
					<Image src={pros6} alt="pros" />
					<h3>All Projects</h3>
				</li>
			</ul>
		</div>
	</div>
  )
}
