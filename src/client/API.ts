import { MUSH_API_URL } from "../utils/constants.js";

export class API {
  async request<T>(route: string): Promise<MushAPIResponse<T>> {
    if (typeof fetch !== "function") {
      throw new Error(
        "Unable to perform requests. Make sure you have installed a Node.js version 18 or higher.",
      );
    }

    try {
      const response = await fetch(MUSH_API_URL + route, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return data as MushAPIResponse<T>;
    } catch {
      return { error_code: 400, success: false };
    }
  }
}

interface MushAPISuccessResponse<T> {
  success: true;
  error_code: -1;
  response: T;
}

interface MushAPIErrorResponse {
  success: false;
  error_code: number;
  response?: {
    status: number;
    message: string;
    details: unknown;
  };
}

type MushAPIResponse<T> = MushAPISuccessResponse<T> | MushAPIErrorResponse;
