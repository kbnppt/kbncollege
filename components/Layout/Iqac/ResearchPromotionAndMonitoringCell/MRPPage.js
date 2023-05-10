import React from 'react'
import HorizontalCutomTabs from '../../../MainSidebar/HorizontalBar';
import OtherFundingAgencies from './OtherFundingAgencies'
import Management from './Management'


const MRPPage = () => {
  const data =[
    { id: 1, title: 'Other Funding Agencies', componentInfo: <OtherFundingAgencies /> },
    { id: 2, title: 'Management', componentInfo: <Management /> },
]
  return (
    <div>
      <h3>
        MRP Cell
      </h3>
      
      <HorizontalCutomTabs data={data} subNav={'Research-Promotion-and-Monitoring-Cell#MRP-Cell'} />

    </div>
  )
}
export default MRPPage