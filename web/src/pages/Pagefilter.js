import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitySelect from '../components/activities/ActivitySelect/ActivitySelect'

function Pagefilter() {
  return (
   <PageLayout>
    <div className="margin-botom">
      <ActivitySelect/>
    </div>
   </PageLayout>
  )
}

export default Pagefilter