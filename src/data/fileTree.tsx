import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone ",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true
    },
    {
      name: "public",
      isFolder: true
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "assets",
          isFolder: true,
          children: [{ name: "react.svg", isFolder: false }],
        },
        { 
          name: "components", 
          isFolder: true ,
          children: [ 
            {name:"SVG" , isFolder:true , children :[{name:"FileIcon.tsx" , isFolder:false}]},
            {name:"Interfaces" , isFolder:true , children :[{name:"index.tsx" , isFolder:false}]},
          ]
        },
        { name: "App.jsx", isFolder: false },
        { name: "App.js", isFolder: false },
        { name: "index.css", isFolder: false },
        { name: "main.tsx", isFolder: false }
      ]
    },
    {
      name: "index.html",
      isFolder: false,
      content: " Hello World From Clon"
    },
    {
      name: ".gitignore",
      isFolder: false,
      content: " Hello World From Clon"
    }
  ]
};
