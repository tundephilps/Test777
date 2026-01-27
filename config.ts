export const config = (key: string): string => {
  const configMap: Record<string, string | undefined> = {
    "app.apiUrl": process.env.NEXT_PUBLIC_API_URL,
    "app.name": "Canada",
    // Add other config keys here as needed
  };

  return configMap[key] || "";
};
