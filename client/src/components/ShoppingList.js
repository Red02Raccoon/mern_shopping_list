import React, {Component} from 'react';
import { connect } from "react-redux";
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import {getItems, deleteItem} from "../actions/itemActions";

class ShoppingList extends Component {

	componentDidMount() {
		this.props.getItems();
  }

	removeItem = (id) => {
		this.props.deleteItem(id)
	}

	render() {
		const {items} = this.props;
		return(
			<Container>
				<ListGroup style={{marginTop: "25px"}}>
					<TransitionGroup className="shopping-list">
						{items.map(({name, _id}) => (<CSSTransition key={_id} classNames= 'fade' timeout={500}>
								<ListGroupItem>
									<Button color="danger" className="remove-btn" size="sm" onClick={this.removeItem.bind(this, _id)} style={{marginRight: "10px"}}>
										&times;
									</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>)
						)}
					</TransitionGroup>
				</ListGroup>
			</Container>
		) 
	}
}

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	items : PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		items: state.items.items
	}
}

export default connect(
	mapStateToProps,
	{ getItems, deleteItem }
)(ShoppingList);