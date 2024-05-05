using HealthStationServices.Util;

namespace HealthStationServices.Domain.Entities;

public class HealthStationEntity : EntityBase<Guid>
{
    public string Name { get; set; } = string.Empty;
    public AddressEntity Address { get; set; }
    public string? Phone { get; set; }
    public ServicesEntity Services { get; set; }
}