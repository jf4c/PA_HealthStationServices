using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Connectors.Interfaces;

public interface IApplicationDbContext : IDisposable
{
    public DbSet<TEntity> Set<TEntity>() where TEntity : class;
    public DbSet<HealthStationEntity> HealthStations { get; }
    
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}