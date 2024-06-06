export const getHealthStationById = async (id: string)=>{
  const response = await fetch(`http://localhost:5375/health-station?id=${id}`);
  return response.json();
}