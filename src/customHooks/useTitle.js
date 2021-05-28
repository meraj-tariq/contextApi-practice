import React, { useEffect } from 'react'

export default function useTitle(counterTitle) {
console.log(counterTitle);
    useEffect(() => {
        document.title = counterTitle
    })
    // return (
    //     <div>

    //     </div>
    // )
}
