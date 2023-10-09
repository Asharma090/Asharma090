"use client"
import React from 'react';
import style from  './banner.module.scss';
import Image from 'next/image';
import banner from '../../../public/images/banner.png';

export default function index() {
  return (
    <div className={style.banner}>
		<Image src={banner} alt="Banner" />
		<div className={style['banner-content']}>
			<div className={style.container}>
				<h1>Top Home Service
					Professionals</h1>
				<p>This platform helps customers in finding Top Rated Home Service Professionals who are trustworthy for
					their home at the best price possible</p>
				<a href="#">Learn More</a>
			</div>

		</div>
	</div>
  )
}
