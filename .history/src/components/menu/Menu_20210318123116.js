import React from 'react'
import MenuPreheader from  '../dates/dates'

export default function Menu() {
    return (
        <div>
            {
                MenuPreheader.map((item)=>{
                    <div>{item.text}</div>
                })
            }
            
        </div>
    )
}
