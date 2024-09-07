import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UtilityBar from '../UtilityBar/UtilityBar'
import Link from 'next/link'

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='ntdl'>
        <Sidebar/>        
        <div className="ntmb">
          <div className="nttp ntwz">
            <div><h2 className='ntpt'>Feed</h2></div>
            <div className="nttm">
              <ul>
                <li>
                  <Link href={"/"}>Recent</Link>
                  <Link href={"/feed/"}>me</Link>
                  <Link href={"/feed/friends"}>Friends</Link>
                  <Link href={"/feed/interest"}>Interest</Link>
                  <Link href={"/feed/hot"}>Hot</Link>
                </li>
              </ul>
            </div>
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