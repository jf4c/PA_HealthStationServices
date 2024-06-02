using HealthStationServices.Business.Interfaces;
using HealthStationServices.Connectors.Persistence.Data;
using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Business.Services;

public class HealthService : IHealthService
{

    private readonly ApplicationDbContext _dbContext;

    public HealthService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<List<HealthServicesEntity>> GetAllHealthServices(CancellationToken cancellationToken)
    {
        var healthServices = await _dbContext.HealthServices
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        return healthServices;
    }
}