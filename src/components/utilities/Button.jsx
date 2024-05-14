import { useState } from "react"

function Button({className}) {
    const [state, setState] = useState(false)

    return (
      <>
        <button className={`w-36 ${className} bg-[#38B6FF] text-black text-md font-mono hover:bg-white hover:shadow-white transition-all duration-500`}>
            ANGGELO HUZ
        </button>
      </>
    )
  }
  
  export default Button
  