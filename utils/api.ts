type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: any
  headers?: Record<string, string>
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {} } = options

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  // Auth
  login: (credentials: { email: string; password: string }) =>
    fetchApi("/auth/login", { method: "POST", body: credentials }),

  register: (userData: { name: string; email: string; password: string }) =>
    fetchApi("/auth/register", { method: "POST", body: userData }),

  // Vehicles
  getVehicles: (params?: { type?: string; location?: string }) =>
    fetchApi("/vehicles", { method: "GET", body: params }),

  getVehicleById: (id: string) => fetchApi(`/vehicles/${id}`),

  // Bookings
  createBooking: (bookingData: any) => fetchApi("/bookings", { method: "POST", body: bookingData }),

  getUserBookings: () => fetchApi("/bookings/user"),

  getVendorBookings: () => fetchApi("/bookings/vendor"),

  // User
  updateProfile: (userData: any) => fetchApi("/user/profile", { method: "PUT", body: userData }),

  // Vendor
  becomeVendor: (vendorData: any) => fetchApi("/vendor/register", { method: "POST", body: vendorData }),

  // Blog
  getBlogs: () => fetchApi("/blogs"),

  getBlogById: (id: string) => fetchApi(`/blogs/${id}`),
}

