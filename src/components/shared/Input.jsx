import React from 'react'

export default function Input({id,title,type,name,value,HandelData,cutomClass,errors}) {
    return (
   
            <div className="mb-3">
                <label htmlFor={id} className="form-label" >{title}</label>
                <input type={type} name={name} id={id} className={`form-control ${cutomClass}`} value={value} onChange={HandelData} />
                {errors[name] && <p className='text-danger'> {errors[name]}</p>}
            </div>
       
    )
}
