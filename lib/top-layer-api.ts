interface CustomFetchResponse<T = any> {
  success: boolean;
  data: T | null;
  error: string | null;
  status: number | null;
}
interface CustomFetchOptions {
  headers?: Record<string, string>;
  body?: any;
  isFormData?: boolean;
}
export const customFetch = {
  baseUrl: "http://localhost:3000/api/v1",

  getHeaders(
    isFormData?: boolean,
    customHeaders: Record<string, string> = {}
  ): Record<string, string> {
    const headers = isFormData
      ? { ...customHeaders }
      : {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...customHeaders,
        };
    return headers;
  },

  async request<T = any>(
    method: string,
    url: string,
    { headers, body, isFormData }: CustomFetchOptions = {}
  ): Promise<CustomFetchResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method,
        headers: this.getHeaders(isFormData, headers),
        body: body && !isFormData ? JSON.stringify(body) : body,
      });

      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson ? await response.json() : await response.text();

      return {
        success: response.ok,
        data: response.ok ? data : null,
        error: response.ok
          ? null
          : (data as any)?.message || `Error: ${response.status}`,
        status: response.status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null,
        error: error.message || "Network error",
        status: null,
      };
    }
  },

  GET<T = any>(
    url: string,
    options?: CustomFetchOptions
  ): Promise<CustomFetchResponse<T>> {
    return this.request<T>("GET", url, options);
  },
  POST<T = any>(
    url: string,
    options: CustomFetchOptions
  ): Promise<CustomFetchResponse<T>> {
    return this.request<T>("POST", url, options);
  },
  PUT<T = any>(
    url: string,
    options: CustomFetchOptions
  ): Promise<CustomFetchResponse<T>> {
    return this.request<T>("PUT", url, options);
  },
  DELETE<T = any>(
    url: string,
    options?: CustomFetchOptions
  ): Promise<CustomFetchResponse<T>> {
    return this.request<T>("DELETE", url, options);
  },
};
