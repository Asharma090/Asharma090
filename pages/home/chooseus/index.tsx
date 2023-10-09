import React from 'react';
import style from './choose.module.scss';
import Image from 'next/image';
import choose1 from '../../../public/images/choose1.png';
import choose2 from '../../../public/images/choose2.png';
import choose3 from '../../../public/images/choose3.png';
import choose4 from '../../../public/images/choose4.png';

export default function index() {
  return (
    <div className={style['why-choose']}>
		<div className={'container'}>
			<h3>
				Why Choose Us
			</h3>
			<ul>
				<li>
					<div className={style.icon}>
						<Image src={choose1} alt='Choose' />
					</div>
					<div className={style['icon-content']}>
						<h3>Word of Mouth</h3>
						<p>You can view the full reviews of all others who have previously used any of our traders</p>
					</div>
				</li>
				<li>
					<div className={style.icon}>
					<Image src={choose2} alt='Choose' />
					</div>
					<div className={style['icon-content']}>
						<h3>You’re Covered</h3>
						<p>All our traders have Public Liability Insurance</p>
					</div>
				</li>
				<li>
					<div className={style.icon}>
					<Image src={choose3} alt='Choose' />
					</div>
					<div className={style['icon-content']}>
						<h3>Qualified Traders</h3>
						<p>All our traders provide proof of qualifications and membership of trade associations</p>
					</div>
				</li>
				<li>
					<div className={style.icon}>
						<Image src={choose4} alt='Choose' />
					</div>
					<div className={style['icon-content']}>
						<h3>Only the Best</h3>
						<p>A trader who falls below our high standards will lose their place on TrustATrader.com</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
  )
}
