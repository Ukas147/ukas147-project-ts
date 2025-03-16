const url = import.meta.env.VITE_API_URL;

export async function createDepartment(label: string) {
	const response = await fetch(`${url}/create-department`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({ label }),
	});

	return response.text();
}