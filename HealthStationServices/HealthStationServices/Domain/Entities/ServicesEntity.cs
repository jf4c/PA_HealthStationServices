using HealthStationServices.Util;

namespace HealthStationServices.Domain.Entities;

public class ServicesEntity : EntityBase<Guid>
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}