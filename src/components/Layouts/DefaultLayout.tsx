import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UtilityBar from '../UtilityBar/UtilityBar'

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='ntdl'>
        <Sidebar/>        
        <div className="ntmb">
          <div className="nttp">
            
          </div>
          {children}
        </div>
        <div className="ntutlsb">
            <UtilityBar/>
        </div>
    </div>
  )
}

export default DefaultLayout