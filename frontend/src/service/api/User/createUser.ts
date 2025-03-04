const url = import.meta.env.VITE_API_URL

interface User {
  label: string;
  departments_id: string
}

export async function createUser(form: User) {

  console.log("createUser", form)
  const { label, departments_id } = form

  const response = await fetch(`${url}/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ label, departments_id }),
  });

  return response.text();
}