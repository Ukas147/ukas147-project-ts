const url = import.meta.env.VITE_API_URL

export async function createUser(nome: string) {
  
  const response = await fetch(`${url}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ nome }),
  });

  return response.text();
}