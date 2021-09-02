import { isString } from "./index";

export function setItemStorage(key: string, value: unknown): void {
  if (!isString(value)) {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
}

export function getItemStorage(key: string, parse = false): string {
  if (parse) {
    return JSON.parse(sessionStorage.getItem(key) || "");
  }
  return sessionStorage.getItem(key) || "";
}

export function removeItemStorage(key: string): void {
  sessionStorage.removeItem(key);
}

export function clearAllStorage(): void {
  sessionStorage.clear();
}
