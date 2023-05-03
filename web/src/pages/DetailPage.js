import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitiesDetail from '../components/activities/Activities-Detail/ActivitiesDetail'
import './detailPage.css';

function DetailPage() {
  return (
    <PageLayout>
      <div className='container'>
        <ActivitiesDetail/>
      </div>
    </PageLayout>
  )
}

export default DetailPage