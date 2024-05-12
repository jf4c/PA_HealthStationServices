using HealthStationServices.Business.Dto.HealthStation;
using HealthStationServices.Business.Interfaces;
using HealthStationServices.Connectors.Persistence.Data;
using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Business.Services;

public class HealthStationService : IHealthStationService
{
    private readonly ApplicationDbContext _dbContext;

    public HealthStationService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<List<HealthStationEntity>> GetAllHealthStations(GetAllHealthStationsRequest filter, CancellationToken cancellationToken)
    {
        var healthStations = _dbContext.HealthStations.ToListAsync(cancellationToken);

        return healthStations;
    }

    public async Task<HealthStationEntity> GetHealthStationById(Guid id, CancellationToken cancellationToken)
    {
        var healthStation = await _dbContext.HealthStations
            .Include(x=>x.Address)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (healthStation is null)
        {
            throw new Exception("healthStation not exist");
        }
        
        return healthStation;
    }

    public Task<HealthStationEntity> CreateHealthStation(HealthStationEntity healthStation, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<HealthStationEntity> UpdateHealthStation(Guid id, HealthStationEntity healthStation, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteHealthStation(Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}