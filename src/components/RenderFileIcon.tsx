import IconImg from "./IconImg";

interface IProps {
    fileName: string
}
const RenderFileIcon = ({fileName}: IProps) => {

    const extention = fileName.split('.').pop();
    if(extention === "html") return  <IconImg src="/icons/html.svg"/>
    if(extention === "tsx") return  <IconImg src="/icons/react_ts.svg"/>
    if(extention === "jsx") return  <IconImg src="/icons/react.svg"/>
    if(extention === "js") return  <IconImg src="/icons/javascript.svg"/>
    if(extention === "css") return  <IconImg src="/icons/css.svg"/>
 
}

export default RenderFileIcon