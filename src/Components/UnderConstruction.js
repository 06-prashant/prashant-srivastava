import React from 'react'

export const UnderConstruction = (props) => {
  return (
    <div>
        <h1 className='heading1' htmlFor='heading' >
           Site Under Construction
        </h1>
        <img style={props} alt='under construction banner' htmlFor='imageRender' src='https://media.istockphoto.com/id/931042070/fr/vectoriel/illustration-de-style-site-construction-ligne.jpg?s=612x612&w=0&k=20&c=Dbq7JkAQIPQ-cNandv1tftBoNa_uMtWD6VI4FHlp19s=' />
    </div>
  )
}
