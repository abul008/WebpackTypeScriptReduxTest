import React, { useState,useRef } from "react"


interface TodoFormProps {
  onAdd(title: string):void
}
// void menak undefined@ meke null arjeqa @ndunum

// void-ն օգտագործվում է այնտեղ, որտեղ տվյալներ չկան: Օրինակ, եթե ֆունկցիան որևէ արժեք չի վերադարձնում, ապա որպես վերադարձի տեսակ կարող եք նշել void-ը:
export const Tudulist:React.FC<TodoFormProps> = (props)=>{


    const [title,setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
         setTitle(event.target.value)
    }

    const keypressfunction = (event:React.KeyboardEvent) =>{
        if(event.key === "Enter"){
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
        }
    }

    
    return(
      <div className="input-filed">
          <input
          ref={ref}
          onChange={changeHandler}
           type="text" 
           id="title" 
           onKeyPress={keypressfunction}
           />
          <label htmlFor="title" className="active">
            hello
          </label>
      </div>
    )
}