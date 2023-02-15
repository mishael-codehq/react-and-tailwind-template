/** @format */

import React from "react";

function MainSection() {
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
				<div
					className="
                    top
                    sm:w-full
                    bg-cool-gray
                    w-[90%]
                    h-[75vh]
                    m-auto
                    mt-[-82px]
                    sm:mt-0
                    ">
					top
				</div>
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
                        ">
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
                    ">
						Next Step
					</a>
				</div>
			</div>
		</section>
	);
}

export default MainSection;
