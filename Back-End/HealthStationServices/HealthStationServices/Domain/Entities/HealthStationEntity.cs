using HealthStationServices.Util;

namespace HealthStationServices.Domain.Entities;

public class HealthStationEntity : EntityBase<Guid>
{
    public string Name { get; set; }
    public AddressEntity Address { get; set; }
    
    public List<HealthServicesEntity> HealthServices { get; set; }

    public HealthStationEntity()
    {
        
    }
    
    public HealthStationEntity(string name, AddressEntity address)
    {
        Id = Guid.NewGuid();
        Name = name;
        Address = address;
    }
}