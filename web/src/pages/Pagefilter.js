import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitySelect from '../components/activities/ActivitySelect/ActivitySelect'
import { Link } from 'react-router-dom';
import './pagefilter.css';

function Pagefilter() {
  return (
   <PageLayout>
   <div className='row menudestinos'>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Roma`}><p className='menudestinosp'>Roma</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Bali`}><p className='menudestinosp'>Bali</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=NuevaYork`}><p className='menudestinosp'>Nueva York</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Egipto`}><p className='menudestinosp'>Egipto</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Paris`}><p className='menudestinosp'>París</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Londres`}><p className='menudestinosp'>Londres</p></Link>
      </div>
    </div>
    <div className="margin-botom">
      <ActivitySelect/>
    </div>
   </PageLayout>
  )
}

export default Pagefilter