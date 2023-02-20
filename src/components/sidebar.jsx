/** @format */
import sidebar_desktop from "../assets/images/bg-sidebar-desktop.svg";
import sidebar_mobile from "../assets/images/bg-sidebar-mobile.svg";
import React, { useState, useEffect } from "react";

function Sidebar(props) {
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
	sm:p-6
	sm:rounded-lg
	overflow-hidden
	">
			<nav
				className="
			flex
			items-center
			justify-center
			h-[72px]
			">
				<ul
					className="
			list-none
			p-0
			m-0
			flex
			sm:flex-col
			sm:h-full
			sm:w-full
			sm:gap-4
			">
					{props.navLinks.map((link) => (
						<li
							key={link.linkId}
							className="
					flex
					items-center
					gap-2
					">
							<span
								onClick={() => props.handleNavclick(link.linkId)}
								className={props.getSpanClasses(link.isActive)}>
								{link.linkId}
							</span>
							<div
								className="
					        flex
							flex-col
							gap-0
					        ">
								<p
									className="
							m-0
							p-0
							hidden
							sm:block
							text-xs
							bg
							text-pastel-blue
							capitalize">
									{link.step}
								</p>
								<p
									className="
							m-0
							p-0
							hidden
							sm:block
							text-sm
							text-white
							capitalize">
									{link.stepTittle}
								</p>
							</div>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default Sidebar;
