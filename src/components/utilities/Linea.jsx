import { BiDisc } from "react-icons/bi";

function Linea() {
    return (
      <>
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-full h-[3px] bg-white rounded-full "></div>
            <BiDisc className="text-white text-2xl absolute right-6"/>
        </div>
      </>
    )
  }
  
  export default Linea
  