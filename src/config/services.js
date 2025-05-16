import { WORKSPACE_DATA } from "./api";

export const getWorkspaceData = async () => {
  try {
    const response = await fetch(WORKSPACE_DATA);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
