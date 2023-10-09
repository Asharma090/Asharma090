import React from 'react'
import style from './footer.module.scss'
import Image from 'next/image'
import logo from '../../public/images/footerlogo.svg'
import Link from 'next/link'

export default function index() {
  return (
    <div className={style['footer-section']}>
		<div className={'container'}>
			<div className={'row'}>

				<div className={'col-md-12'}>

					<Image src={logo} alt="logo" />
					<ul className={style['bottom-menu']}>
						<li><Link href="#">About Us</Link></li>
						<li><Link href="#">Contact Us</Link></li>
						<li><Link href="#">Quick Links</Link></li>
						<li><Link href="#">Help</Link></li>
						<li><Link href="#">Terms & Conditions</Link></li>
						<li><Link href="#">Privacy Policy</Link></li>
					</ul>
				</div>


			</div>
			<div className={style.copyright}>

				<p>© 2023 ABC,Inc. All rights reserved</p>
				<ul>
					<li><Link href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link></li>
					<li><Link href=""><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
					<li><Link href=""><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
					<li><Link href=""><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>


				</ul>
			</div>

		</div>
	</div>
  )
}
