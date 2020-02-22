import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Me from "./Me";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";
import "./pages.scss";

const PageContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
class Pages extends PureComponent {
	render() {
		if (!this.props.user || !this.props.user.basics) {
			return <div />;
		}

		const user = this.props.user;
		return (
			<div className="Pages">
				<Route
					render={({ location }) => {
						return (
							<PageContainer>
								<TransitionGroup appear component={null}>
									<CSSTransition
										timeout={1000}
										classNames="page"
										key={location.pathname}
									>
										<Switch location={location}>
											<Route exact path="/">
												<Me user={user} />
											</Route>
											<Route exact path="/projects">
												<Projects user={user} />
											</Route>
											<Route exact path="/work">
												<Work user={user} />
											</Route>
											<Route exact path="/education">
												<Education user={user} />
											</Route>
										</Switch>
									</CSSTransition>
								</TransitionGroup>
							</PageContainer>
						);
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Pages);
