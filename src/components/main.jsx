/** @format */

import React, { useState, useEffect } from "react";

import Content from "./content";

class MainSection extends React.Component {
	state = {
		page: 1,
	};

	incrementPage = () => {
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
	};

	decrementPage = () => {
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
	};

	render() {
		return (
			<section
				className="
        bg-magnolia
        sm:bg-white
        grow
        sm:flex
        sm:items-center
        ">
				<div
					className="
                    contain
                    flex
                    flex-col
                    justify-between
                    w-full
                    h-full
                    sm:h-[90%]
                    sm:w-[80%]
                    m-auto
                    ">
					<Content pageid={this.state.page} />
					<div
						className="
                        bottom
                        w-full
                        h-[12vh]
                        flex
                        items-center
                        justify-between
                        px-[5vw]
                        sm:px-0
                        bg-white
                        ">
						<a
							href="#"
							className="
                            text-sm
                            text-cool-gray
                            "
							onClick={this.decrementPage}>
							Go back
						</a>
						<a
							href="#"
							className="
                        text-sm
                        bg-marie-blue
                        rounded
                        px-4
                        py-2
                        text-white
                        "
							onClick={this.incrementPage}>
							Next Step
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default MainSection;
