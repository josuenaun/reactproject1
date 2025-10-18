import React from 'react'

export const LayoutHeader = ({username,img}) => {
  return (
    <div className='flex w-full bg-amber-800'>
        <div-left>
            <h1>{username}</h1>
            <img src={`https://unavatar.io/${img}`}/>
        </div-left>
    </div>
  )
}
