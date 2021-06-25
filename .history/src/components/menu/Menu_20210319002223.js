import React from 'react'
import {MenuPreheader} from  '../dates/dates'

export default function Menu() {
    return (
        <div>
            {
                MenuPreheader.map((item)=>{
                    <h1>{item.text}</h1>
                })
            }
        </div>
    )
}
