import React, {Component} from 'react';
import uuid from "uuid";
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class ShoppingList extends Component {
	state = {
		items: [
			{ id : uuid(), name: "Sugar"},
			{ id : uuid(), name: "Water"},
			{ id : uuid(), name: "Milk"}
		]
	}
	handleClick = () => {
		this.setState((state) => {
			return {
				items: [...state.items, {id: uuid(), name: "Egg"}]
			}
		}, () => {
			console.log(this.state)
		})
	}
	handleRemoveItem = (id) => {
		this.setState((state) => {
			return {
				items: state.items.filter((item) => item.id !== id)
			}
		})
	}
	render() {
		const {items} = this.state;
		return(
			<Container>
				<Button color="dark" onClick={this.handleClick}>Add item</Button>

				<ListGroup style={{marginTop: "25px"}}>
					<TransitionGroup className="shopping-list">
						{items.map(({name, id}) => (
							<CSSTransition key={id} classNames= 'fade' timeout={500}>
								<ListGroupItem>
									<Button color="danger" className="remove-btn" size="sm" onClick={this.handleRemoveItem.bind(this, id)} style={{marginRight: "10px"}}>
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

export default ShoppingList;