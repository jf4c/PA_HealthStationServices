using HealthStationServices.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HealthStationServices.Connectors.Persistence.Mapping;

public class AddressEntityMap : IEntityTypeConfiguration<AddressEntity>
{

    public void Configure(EntityTypeBuilder<AddressEntity> builder)
    {
        builder.HasKey(x => x.Id);
        builder.ToTable("address");
        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.State).HasColumnName("state");
        builder.Property(x => x.City).HasColumnName("city");
        builder.Property(x => x.District).HasColumnName("district");
        builder.Property(x => x.Logradouro).HasColumnName("logradouro");
        builder.Property(x => x.Number).HasColumnName("number");
    }
}