using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HealthStationServices.Connectors.Persistence.Mapping;

public class HealthStationEntityMap : IEntityTypeConfiguration<HealthStationEntity>
{

    public void Configure(EntityTypeBuilder<HealthStationEntity> builder)
    {
        builder.HasKey(x => x.Id);
        builder.ToTable("health_station");
        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.Name).HasColumnName("name");
        builder.HasOne(x => x.Address).WithMany();
    }
}