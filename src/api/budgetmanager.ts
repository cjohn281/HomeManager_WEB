import { api } from "./client";
import { get } from "./http";

export function getPersons() {
  return get(`${api.baseUrl}/BudgetManager`);
}