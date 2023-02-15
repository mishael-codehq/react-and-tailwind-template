/** @format */
import sidebar_desktop from "../assets/images/bg-sidebar-desktop.svg";
import sidebar_mobile from "../assets/images/bg-sidebar-mobile.svg";
import React from "react";

function Sidebar() {
	return (
		<section
			className="
	h-36
	sm:h-full
	bg-cover
	bg-[url('./assets/images/bg-sidebar-mobile.svg')]
	sm:bg-[url('./assets/images/bg-sidebar-desktop.svg')]
	sm:basis-[30%]
	shrink-0
	"></section>
	);
}

export default Sidebar;
