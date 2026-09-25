import React, { useState } from 'react'

const Assignment = () => {
  const [size, setsize] = useState(100)
 const [height, setheight] = useState(100)

  function widincrement() {

    
    setsize(size + 20)
  }

  function widdecrement() {
    setsize(size - 20)
  }
  function widthincrement() {
    setheight(height + 20)
  }
 function widthdecrement() {
    setheight(height - 20)
  }


  return (
    <div>
      <img src="https://www.bing.com/ck/a?!&&p=ce5c4a774c01008e37e538eb8a2b470796ce9ae797de368efe8d3768fc7697bcJmltdHM9MTc5MDIwODAwMA&ptn=3&ver=2&hsh=4&fclid=2968ab6e-7d79-6e47-2484-bdaf7cff6fea&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZSZpZD0wQTQ1QkRBRUZFQzUzRjA0MzBEOUZGODM0MkIwMDVDRDVFQjRBRTMwJkZPUk09SVFGUkJB"
      width={size}
      height={height} />
      <button onClick={widincrement}>increase width</button>
      <button onClick={widdecrement}>decrease width</button>
      <button onClick={widthincrement}>increase height</button>
      <button onClick={widthdecrement}>decrease height</button>
    </div>
  )
}


export default Assignment