using HealthStationServices.Util;

namespace HealthStationServices.Domain.Entities;

public class AddressEntity : EntityBase<Guid>
{
    public string Country { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string District { get; set; } = string.Empty;
    public string Street { get; set; } = string.Empty;
    public int Number { get; set; }
    public string Cep { get; set; } = string.Empty;
}