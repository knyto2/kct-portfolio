import React, { Component } from "react";
import { Button } from "antd";
import { Paragraph } from "../../styles";
import { PageElem } from "../pagesStyles.js";

class Me extends Component {
	render() {
		const user = this.props.user;
		return (
			<PageElem className="page">
				<div className="section-title">About Me</div>
				<Paragraph>{user.basics.summary}</Paragraph>
				<div className="section-title">Skills</div>
				<div>
					{user.skills.map(skill => (
						<Button
							className="pill"
							type="primary"
							key={skill.name}
						>
							{skill.name}
						</Button>
					))}
				</div>
				<div className="section-title">Profiles</div>
				<ul>
					{user.basics.profiles.map((profile, i) => (
						<span key={profile.network}>
							{i !== 0 && " | "}
							<a
								href={profile.url}
								target="_blank"
								rel="noreferrer noopener"
							>
								{profile.network}
							</a>
						</span>
					))}
				</ul>
			</PageElem>
		);
	}
}

export default Me;
