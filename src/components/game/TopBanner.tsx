import React from 'react'

export interface TopBannerProps {
  name : string;
}

const TopBanner = ({name} : TopBannerProps) => {
  return (
    <div className='banner topbanner'>{name}</div>
  )
}

export default TopBanner