using HealthStationServices.Domain.Entities;

namespace HealthStationServices.Business.Interfaces;

public interface IHealthService
{
    public Task<List<HealthServicesEntity>> GetAllHealthServices(CancellationToken cancellationToken);
}