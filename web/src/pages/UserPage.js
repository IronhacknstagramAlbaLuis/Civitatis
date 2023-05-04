import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import UserDetail from '../components/userDetail/UserDetail'
import ActivitiesList from '../components/activities/activities-list/ActivitiesList';
import './userPage.css';


function UserPage() {
  return (
    <PageLayout>
      <UserDetail/>
      <div className='container interes'>
        <section className="principalsativities">
          <h2>También te puede interesar...</h2>
          <ActivitiesList/>
        </section>
      </div>
    </PageLayout>

  )
}

export default UserPage