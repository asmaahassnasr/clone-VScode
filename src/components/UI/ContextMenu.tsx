interface IProps{
    positions:{
        posX:number,
        posY:number
    }
}
const ContextMenu = ({positions}:IProps) => {
  return (
        <ul className="bg-gray-600 text-gray-300 w-fit px-7 py-3 rounded-md"
        style={{
            position:"absolute",
            left:positions.posX,
            top:positions.posY
        }}>
            <li>Close </li>
            <li> Close All </li>
        </ul>
  )
}

export default ContextMenu