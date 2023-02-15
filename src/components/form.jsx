/** @format */

import React from "react";
import Sidebar from "./sidebar";
import MainSection from "./main";

class Form extends React.Component {
	state = {};
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
			">
				<Sidebar />
				<MainSection />
			</section>
		);
	}
}

export default Form;
