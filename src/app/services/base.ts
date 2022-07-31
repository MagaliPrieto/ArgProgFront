import { environment } from "src/environments/environment";

export const BACKEND_URL: string = environment.baseUrl;

export function buildBackendUrl(path: string): string {
    return BACKEND_URL + path;
}
