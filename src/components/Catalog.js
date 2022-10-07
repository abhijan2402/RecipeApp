import React from 'react';
import '../Css/Catalog.css'
import RecipeData from '../RecipeData';
const Catalog=()=>{
    return(
        <div style={{flexWrap:"wrap",display:'flex',alignItems:"center"}}>
            {
                RecipeData.map((item) =>
                    <div className='card-container'>
                        <img className='image-contanier' src={item.imageUrl} /> 
                        <div>
                            <p className='recipe-name'>{item.name}</p>
                            <p className='recipe-desc'>{item.description}</p>
                        </div>
                        <div className='price-button-container'>
                            <p className='price-tag'>{item.price}</p>
                            <button className='custom-button'
                                style={{
                                    backgroundColor:"white",fontWeight:"bold",color:"orange",borderColor:"orange"
                                }}
                            >
                                Remove
                            </button>
                            <button className='custom-button'
                                style={{
                                    backgroundColor:"orange",fontWeight:"bold",color:"white",borderColor:"orange"
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Catalog;