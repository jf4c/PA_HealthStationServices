


export const getAllHealthServices = async () => {
  const response = await fetch(
    `http://localhost:5375/all/HealthServices`
  );
  return response.json();
}