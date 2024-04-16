

function Card(props) {
    return (
       
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.universe}</p>
                <img className="card-img" src={props.url} alt={props.title}/>
                <p className="card-text">{props.info}</p>
            </div>
            
            <div className="card-footer">
            </div>
       </div>
    );
}

export default Card;