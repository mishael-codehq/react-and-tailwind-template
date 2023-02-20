/** @format */
import React, { useState, useEffect } from "react";

function YourInfo(props) {
	let [userName, SetUserName] = useState();

	let [userEmail, SetUserEmail] = useState();

	let [userPhoneNumber, SetUserPhoneNumber] = useState();

	let [formElements] = useState([
		{
			id: 1,
			type: "text",
			label: "Name",
			example: "eg.stephen King",
			valueId: userName,
		},
		{
			id: 2,
			type: "email",
			label: "Email Adress",
			example: "eg.Stephen King@Lorem.com",
			valueId: userEmail,
		},
		{
			id: 3,
			type: "number",
			label: "Phone Number",
			example: "eg.+900 0909 08989",
			valueId: userPhoneNumber,
		},
	]);

	function handleChange(event) {
		const { value, type } = event.target;

		if (type === "text") {
			SetUserName(value);
			props.onSetUserName(value);
		} else if (type === "email") {
			SetUserEmail(value);
		} else if (type === "number") {
			SetUserPhoneNumber(value);
		}
	}
	return (
		<React.Fragment>
			<h1
				className="
            p-0 
            m-0
            text-marie-blue
            ">
				Personal Info
			</h1>
			<p
				className="
            p-0 
            m-0 
            mt-2 
            mb-6
            text-cool-gray
            text-sm
            ">
				Please provide your name, email-adress and phone number.
			</p>
			<form
				action=""
				className="flex
            flex-col
            gap-2
            mb-2
            ">
				{formElements.map((element) => (
					<div
						className="
                    flex
                    flex-col
                    "
						key={element.id}>
						<label
							className="
                        text-sm
                        text-marie-blue
                        "
							htmlFor={element.label}>
							{element.label}
						</label>
						<input
							type={element.type}
							className="
                        py-3
                        px-2
                        rounded
                        outline-none
                        border-2
                        dBorder
                        font-lg
                        "
							onChange={handleChange}
							placeholder={element.example}
							value={element.valueId}
						/>
					</div>
				))}
			</form>
		</React.Fragment>
	);
}

export default YourInfo;
WebSocket;
