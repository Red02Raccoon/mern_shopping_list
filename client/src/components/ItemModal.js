
import React, {Component} from 'react';
import {  
	Button,
	Container,
	Modal,
	ModalHeader,
	ModalBody, Form, FormGroup, Label,
	Input 
} from 'reactstrap';

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
	state = {
		modal: false,
		name: ""
	}
	
	toggleModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			name: this.state.name
		}

		this.props.addItem(newItem);
		this.toggleModal()
	}
 
	render() {
		return(
			<Container>
				<Button
					color="dark"
					style={{marginBottom: "30px"}}
					onClick={this.toggleModal}
				>
					Add Item
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						Add to Shopping list
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input type="text"
									name="name"
									id="item"
									placeholder="Add shopping item"
									onChange = {this.onChange}
								/>
							</FormGroup>
							<Button color="dark" style={{marginBottom : "20px"}} block>Add Item</Button>
						</Form>
					</ModalBody>
				</Modal>
			</Container>
		) 
	}
}

export default connect(
	null,
	{  addItem }
)(ItemModal);
