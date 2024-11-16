function Card({item, id, handleClick}) {
    const itemClass = item.stat ? "active" : "";
    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" className="card-img" />
        </div>
    )
}
export default Card; 