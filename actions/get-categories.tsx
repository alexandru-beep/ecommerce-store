import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    console.error("Failed to fetch categories:", res.statusText);
    return [];
  }

  try {
    return await res.json();
  } catch (err) {
    console.error("Failed to parse categories JSON:", err);
    return [];
  }
};

export default getCategories;
