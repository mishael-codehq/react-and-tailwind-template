/** @format */

import React from "react";
import Sidebar from "./sidebar";
import MainSection from "./main";

class Form extends React.Component {
	state = {
		page: 1,
	};

	setPage = (page) => {
		this.setState({
			page,
		});
	};

	incrementPage = () => {
		if (typeof this.page === "string") {
		} else {
			if (this.state.page < 4) {
				this.setState((prv) => {
					return {
						page: prv.page + 1,
					};
				});
			} else {
				this.setState((prv) => {
					return {
						page: 1,
					};
				});
			}
		}
	};

	decrementPage = () => {
		if (typeof this.page === "string") {
		} else {
			if (this.state.page > 2) {
				this.setState((prv) => {
					return {
						page: prv.page - 1,
					};
				});
			} else {
				this.setState((prv) => {
					return {
						page: 1,
					};
				});
			}
		}
	};

	getSpanClasses = (active) => {
		let classes = `rounded-[50%]
flex
items-center
justify-center
h-6
w-6
text-xs
cursor-pointer
border-2
border-solid
border-pastel-blue
text-white
font-bold
`;

		if (active) {
			classes = `
	bg-pastel-blue
	text-marie-blue
	rounded-[50%]
flex
items-center
justify-center
h-6
w-6
text-xs
cursor-pointer
	`;
		}
		return classes;
	};

	handleNavclick = (id) => {
		let updatedLinks = this.getNavLinks().map(function (link) {
			if (link.linkId === id) {
				link.isActive = true;
			} else {
				link.isActive = false;
			}
			return link;
		});

		this.setState({
			navLinks: updatedLinks,
		});

		this.setState({
			page: id,
		});
	};

	getNavLinks = () => {
		let links = [
			{
				linkId: 1,
				step: "step 1",
				stepTittle: "your info",
				isActive: true,
			},
			{
				linkId: 2,
				step: "step 2",
				stepTittle: "select plan",
				isActive: false,
			},
			{
				linkId: 3,
				step: "step 3",
				stepTittle: "add-ons",
				isActive: false,
			},
			{
				linkId: 4,
				step: "step 4",
				stepTittle: "summary",
				isActive: false,
			},
		];
		let updatedLinks = links.map((link) => {
			if (link.linkId === this.state.page) {
				link.isActive = true;
			} else {
				link.isActive = false;
			}
			return link;
		});
		return updatedLinks;
	};

	render() {
		return (
			<section
				className="
				center-body
				bg-magnolia
				sm:bg-white
				h-full
				w-full
				sm:h-[70%]
				sm:w-[80%]
				max-w-3xl
				sm:rounded-lg
				flex
				justify-between
			    flex-col
				sm:flex-row
				sm:p-2
			">
				<Sidebar
					handleNavclick={this.handleNavclick}
					getSpanClasses={this.getSpanClasses}
					navLinks={this.getNavLinks()}
				/>
				<MainSection
					setPage={this.setPage}
					page={this.state.page}
					incrementPage={this.incrementPage}
					decrementPage={this.decrementPage}
				/>
			</section>
		);
	}
}

export default Form;
