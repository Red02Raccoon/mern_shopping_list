import React, {Component} from 'react';
import { connect } from "react-redux";
import uuid from "uuid";
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import {getItems} from "../actions/itemActions";

class ShoppingList extends Component {
	componentDidMount() {
		this.props.getItems();
	}
	addItem = () => {
		this.setState((state) => {
			return {
				items: [...state.items, {id: uuid(), name: "Egg"}]
			}
		}, () => {
			console.log(this.state)
		})
	}
	removeItem = (id) => {
		this.setState((state) => {
			return {
				items: state.items.filter((item) => item.id !== id)
			}
		})
	}
	render() {
		const {items} = this.props;
		return(
			<Container>
				<Button color="dark" onClick={this.addItem}>Add item</Button>
				<ListGroup style={{marginTop: "25px"}}>
					<TransitionGroup className="shopping-list">
						{items.map(({name, id}) => (
							<CSSTransition key={id} classNames= 'fade' timeout={500}>
								<ListGroupItem>
									<Button color="danger" className="remove-btn" size="sm" onClick={this.removeItem.bind(this, id)} style={{marginRight: "10px"}}>
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
		items: state.items.data
	}
}

export default connect(
	mapStateToProps,
	{ getItems }
)(ShoppingList);