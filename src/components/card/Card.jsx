import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card" style={{width: '18rem', marginTop: '2rem'}}>
        {props.children}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Card