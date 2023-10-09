import React from 'react';
import style from './form.module.scss';

export default function index() {
  return (
    <div className={style['services-form']}>

        <h2>What Service are you looking for today?</h2>

            <div className={'row'}>
                <div className={'col-lg-5'}>
                    <label>Service</label>
                    <select className={style['form-select']} name="Service">
                        <option value="">Select Service</option>
                        <option value="Top Categories">Top Categories</option>
                        <option value="Roofing">Roofing</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Windows">Windows</option>
                        <option value="Heating">Heating</option>
                        <option value="Electrician">Electrician</option>
                    </select>
                </div>
                <div className={'col-lg-4'}>
                    <label>City</label>
                    <select className={style['form-select']} name="City">
                        <option value="">Select City</option>
                    </select>
                </div>
                <div className={'col-lg-3'}>
                    <button type="submit
                ">Search</button>
                </div>
            </div>


</div>
  )
}
