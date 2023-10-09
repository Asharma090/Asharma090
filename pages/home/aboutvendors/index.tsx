import React from 'react';
import style from './about.module.scss';
import Image from 'next/image';
import about from '../../../public/images/about.png';

export default function index() {
  return (
    <div className={'container'}>
		<div className={style['about-vendors']}>
			<div className={'row'}>
				<div className={'col-lg-6'}>
					<div className={style.vendors}>
						<h3>About Vendors</h3>
						<p>This platform helps customers in finding Top Rated Home Service Professionals who are
							trustworthy for their home at the best price possible</p>
						<ul>
							<li>
								<span>Record your Reference</span>
								<p>On Place to refer the vendors so they acknowledge and who referred</p>
							</li>
							<li>
								<span>Vendor is Aware</span>
								<p>Vendor will acknowledge your reference</p>
							</li>
							<li>
								<span>Top References</span>
								<p>Vendor would know who referred him and share appreciation</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={'col-md-6'}>
					<div className={style['about-image']}>
						<Image src={about} alt="about" />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
