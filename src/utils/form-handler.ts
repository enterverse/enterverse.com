import { toast } from "react-toastify";

import { API_BASE_URL } from "../constants";

import type { FormEvent } from "react";

import "react-toastify/dist/ReactToastify.css";

interface FormData {
	email: string;
	feedback?: string;
}

export async function handleFormSubmission(
	event: FormEvent<HTMLFormElement>
): Promise<void> {
	event.preventDefault(); // Prevent the default form submission

	const form = event.currentTarget;
	const formData = new FormData(form);
	const data: FormData = {
		email: formData.get("email") as string,
		feedback: formData.get("feedback") as string | undefined
	};

	try {
		const response = await fetch(`${API_BASE_URL}/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (response.ok) {
			toast.success("Submitted");
			console.log("Contact request sent to Slack.");
		} else {
			console.error("Error sending contact request.");
		}
	} catch (reason) {
		console.error("Error:", reason);
	}
}

export async function emailListSubmission(
	event: FormEvent<HTMLFormElement>
): Promise<void> {
	event.preventDefault();

	const form = event.currentTarget;
	const formData = new FormData(form);
	const data: FormData = {
		email: formData.get("email") as string
	};

	try {
		const response = await fetch(`${API_BASE_URL}/email-list`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (response.ok) {
			toast.success("Submitted");
			console.log("Contact request sent to Slack.");
		} else {
			console.error("Error sending contact request.");
		}
	} catch (reason) {
		console.error("Error:", reason);
	}
}
