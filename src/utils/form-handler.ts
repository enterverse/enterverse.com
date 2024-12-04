import { toast } from "sonner";

import { ApiEndpoint } from "@/constants";

import type { FormEvent } from "react";

interface FormData {
	email: string;
	feedback?: string;
}

let isSubmitting = false;
export async function handleFormSubmission(
	event: FormEvent<HTMLFormElement>
): Promise<void> {
	event.preventDefault(); // Prevent the default form submission

	if (isSubmitting) {
		return;
	}
	isSubmitting = true;

	const form = event.currentTarget;
	const formData = new FormData(form);
	const data: FormData = {
		email: formData.get("email") as string,
		feedback: formData.get("feedback") as string | undefined
	};
	const id = toast.loading("Submitting...");

	try {
		const response = await fetch(ApiEndpoint("/contact"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (response.ok) {
			toast.success("Contact form submitted!", { id });
			form.reset();
		} else {
			toast.error("You are submitting too many!", { id });
		}
	} catch (reason) {
		toast.error("An error occurred! Check logs!", { id });
		console.error("Error:", reason);
	}

	isSubmitting = false;
}

let isSubmitting2 = false;
export async function emailListSubmission(
	event: FormEvent<HTMLFormElement>
): Promise<void> {
	event.preventDefault();

	if (isSubmitting2) {
		return;
	}
	isSubmitting2 = true;

	const form = event.currentTarget;
	const formData = new FormData(form);
	const data: FormData = {
		email: formData.get("email") as string
	};
	const id = toast.loading("Adding to email list...");

	try {
		const response = await fetch(ApiEndpoint("/email-list"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (response.ok) {
			toast.success("Added to email list!", { id });
			form.reset();
		} else {
			toast.error("You are already on the email list!", { id });
		}
	} catch (reason) {
		toast.error("An error occurred! Check logs!", { id });
		console.error("Error:", reason);
	}

	isSubmitting2 = false;
}
