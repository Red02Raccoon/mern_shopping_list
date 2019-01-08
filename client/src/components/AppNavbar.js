import React from 'react';
import {
	Collapse,
	Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class AppNavbar extends React.Component {
	state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" style={{marginBottom: "20px"}}>
					<Container>
						<NavbarBrand href="/">Shopping list</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://github.com/Red02Raccoon">Github</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
        </Navbar>
      </div>
    );
  }
}