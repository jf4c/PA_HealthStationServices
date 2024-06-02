using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HealthStationServices.Connectors.Persistence.Mapping;

public class HealthServicesEntityMap : IEntityTypeConfiguration<HealthServicesEntity>
{
    public void Configure(EntityTypeBuilder<HealthServicesEntity> builder)
    {
        builder.HasKey(x => x.Id);
        builder.ToTable("health_services");
        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.Name).HasColumnName("name");
        builder.Property(x => x.Description).HasColumnName("description");
    }
}