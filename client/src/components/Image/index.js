import React from 'react'
import Image from 'next/image'

const Img = () => {
  return (
    <div>
            <Image
              src="/img1.png"
              width={150}
              height={125}
              alt="Picture of the author"
            />
          </div>
        
  )
}

export default Img
