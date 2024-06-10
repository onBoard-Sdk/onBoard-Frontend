import { useState, useEffect } from "react";

export default function useTitle(initTitle:string){
  const [title, setTitle] = useState<string>(initTitle);

  useEffect(()=>{
    const DOMTitle = document.querySelector("title");
    if(DOMTitle){
      DOMTitle.innerText = title + ' · onBoard';  
    }
  }, [title]);

  return setTitle
}