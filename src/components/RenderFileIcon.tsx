import IconImg from "./IconImg";
import FileIcon from "./SVG/FileIcon";

interface IProps {
    fileName: string;
    isFolder?:boolean;
    isOpen?:boolean;
}
const RenderFileIcon = ({fileName,isFolder,isOpen}: IProps) => {

    const extention = fileName.split('.').pop();

    // *** Files 
    if(extention === "html") return  <IconImg src="/icons/html.svg"/>
    if(extention === "tsx") return  <IconImg src="/icons/react_ts.svg"/>
    if(extention === "jsx") return  <IconImg src="/icons/react.svg"/>
    if(extention === "js") return  <IconImg src="/icons/javascript.svg"/>
    if(extention === "css") return  <IconImg src="/icons/css.svg"/>
    if(extention === "svg") return  <IconImg src="/icons/svg.svg"/>

    // *** Folders 

    if(isFolder && extention==="node_modules")
        return isOpen? <IconImg src="/icons/folder-node-open.svg"/> : <IconImg src="/icons/folder-node.svg"/>
    if(isFolder && extention==="public")
        return isOpen? <IconImg src="/icons/folder-public-open.svg"/> : <IconImg src="/icons/folder-public.svg"/>
    if(isFolder && extention==="src")
        return isOpen? <IconImg src="/icons/folder-src-open.svg"/> : <IconImg src="/icons/folder-src.svg"/>
    if(isFolder && extention==="components")
        return isOpen? <IconImg src="/icons/folder-components-open.svg"/> : <IconImg src="/icons/folder-components.svg"/>
    if(isFolder && extention==="assets")
        return isOpen? <IconImg src="/icons/folder-changesets-open.svg"/> : <IconImg src="/icons/folder-changesets.svg"/>
    if(isFolder && extention==="SVG")
        return isOpen? <IconImg src="/icons/folder-svg-open.svg"/> : <IconImg src="/icons/folder-svg.svg"/>
    if(isFolder && extention==="Interfaces")
        return isOpen? <IconImg src="/icons/folder-interface-open.svg"/> : <IconImg src="/icons/folder-interface.svg"/>
    
    else if(isFolder)
        return isOpen? <IconImg src="/icons/folder-default-open.svg"/> : <IconImg src="/icons/folder-default.svg"/>
    return <FileIcon />
 
}

export default RenderFileIcon