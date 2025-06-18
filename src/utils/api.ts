class Api {
  constructor() {}

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    return response.json();
  }

  async post<T>(url: string, data?: object, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      ...options
    });

    if (!response.ok) {
      throw new Error(`Error posting data: ${response.statusText}`);
    }

    return response.json();
  }
}

const api = new Api();
export default api;
