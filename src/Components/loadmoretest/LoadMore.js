import React, { useState } from 'react'

function LoadMore() {
    const data = ['shoes', 'clothes', 'house', 'kettle', 'bath', 'dress', 'gown', 'car', 'money']
    const [limit, setLimit] = useState(4)

  return (
    <div>
        <div>Items Display</div>
        {data.slice(0, limit).map((items) => (
            <div>
                {items}
            </div>
        ))}
        {
            limit < data.length ? (
                <button onClick={() => setLimit(limit + 3)}>Load more</button>
            ):(
                <div>
                <button disabled='true'>Load more</button>
                <div>You have reached the limit</div>
                </div>
            )
        }
        
    </div>
  )
}

export default LoadMore




