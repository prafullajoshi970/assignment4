const Cards = ({color_name,color_code})=>{
   
    return(
        <div className="Card" style={{height:200,width:120,margin:10}}>
            <p style={{height:110,width:116,margin:0,padding:2,backgroundColor:`${color_code}`}}></p>
            <p className="text" >{color_code}</p>
            <span  style={{color:`${color_code}`,padding:2,fontsize:20}}>{color_name}</span>


        </div>
    )
}
export  default Cards;