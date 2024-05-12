using HealthStationServices.Connectors.Persistence.Mapping;
using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Connectors.Persistence.Data;

public class ApplicationDbContext : DbContext
{
    public const string Schema = "fho_pa";

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<HealthStationEntity> HealthStations { get; set; }
    public DbSet<AddressEntity> Addresses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new HealthStationEntityMap());
        modelBuilder.ApplyConfiguration(new AddressEntityMap());
        modelBuilder.HasDefaultSchema(Schema);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=health_station;Username=postgres;Password=8d85e3629c55");
    }
}