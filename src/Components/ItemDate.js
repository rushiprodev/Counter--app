import "./ItemDate.css"

function ItemDate(props){
    const day= props.Day
    const Month= props.Month
    const Year= props.Year
    

    return (
   <div className="ItemValue">
    <span>{day}</span>
    <span>{Month}</span>
    <span>{Year}</span>
    </div>
)
}

export default ItemDate