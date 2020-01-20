import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Error404 extends Component {
  render() {
    return(
		<div className="Error404">

			<div className="fof">
				<h1>Error 404</h1><br />
				<Link to="/" className="siimple-btn siimple-btn--grey siimple-btn--big"><i className="far fa-arrow-alt-circle-left siimple--color-error"></i> Inicio</Link>
			</div>
		</div>
    )
  }
}


export default Error404;
