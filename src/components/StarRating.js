import Star from "./Star";

function StarRating (props) {
    

    const arr = [1, 2, 3, 4, 5];
    
    return (
        <div className="rating">
            <h1>Rate us</h1>
            <div className="stars">
                {arr.map((order) => (
                    <Star 
                        key={order}
                        selected={order <= props.stars}
                        handler = {() => props.setStars(order)}
                    />
                ))}
            </div>
            <div className="remark">
                <h2 className="rem">{props.remark[props.stars]}</h2>
            </div>
        </div>
        
    )
}

export default StarRating;