import type { Method } from "axios";
export interface ApiResponse<T = any> {
    status: number;
    data: T;
}
interface SendRequestInterface {
    method: Method;
    endpoint: string;
    headers?: Record<string, string>;
    body?: any;
    local?: boolean;
}
declare const api: <T = any>({ method, endpoint, body, headers, local, }: SendRequestInterface) => Promise<ApiResponse<T>>;
export default api;
