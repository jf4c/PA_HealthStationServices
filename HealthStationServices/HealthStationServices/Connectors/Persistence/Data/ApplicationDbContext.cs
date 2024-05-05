using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Connectors.Persistence.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, DbSet<HealthStationEntity> healthStations, DbSet<AddressEntity> addresses) : base(options)
    {
        HealthStations = healthStations;
        Addresses = addresses;
    }
    
    public DbSet<HealthStationEntity> HealthStations { get; set; }
    public DbSet<AddressEntity> Addresses { get; set; }
}