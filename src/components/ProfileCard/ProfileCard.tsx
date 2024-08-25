import Image from "next/image"
const ProfileCard = () => {
  return (
    <div className='nt-profile-card'>
        <div className="ntdimg">DI</div>
        <h3 className="ntun">Users name</h3>
        <span className="ntuid">@UserId</span>
    </div>
  )
}

export default ProfileCard