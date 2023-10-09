import React from 'react';
import style from './recentproject.module.scss';
import Image from 'next/image';
import pro1 from '../../../public/images/pro1.png';
import gallery1 from '../../../public/images/gallery1.png';


export default function index() {
  return (
    <div className={style['recent-project']}>
		<h2>Recent Completed Projects</h2>
		<div className={` ${style['project-slider']}  d-flex`}>
			<div className={style.item}>
				<div className={style['top-section']}>
					<Image src={pro1} alt="images" />
					<div className={style['right-content']}>
						<h3>Dewan Lane</h3>
						<span>Electrician</span>
					</div>
				</div>
				<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
					magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
					quia dolor sit amet.</p>
				<div className={style['image-section']}>
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
				</div>
			</div>
			<div className={style.item}>
            <div className={style['top-section']}>
						<Image src={pro1} alt="images" />
					<div className={style['right-content']}>
						<h3>Dewan Lane</h3>
						<span>Electrician</span>
					</div>
				</div>
				<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
					magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
					quia dolor sit amet.</p>
                    <div className={style['image-section']}>
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
					<Image src={gallery1} alt='gallery' />
				</div>
			</div>

		</div>
	</div>
  )
}
