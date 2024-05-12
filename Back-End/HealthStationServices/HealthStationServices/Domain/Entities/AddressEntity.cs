using HealthStationServices.Util;

namespace HealthStationServices.Domain.Entities;

public class AddressEntity : EntityBase<Guid>
{
    public string State { get; set; }
    public string City { get; set; }
    public string District { get; set; }
    public string Logradouro { get; set; }
    public string Number { get; set; }

    public AddressEntity()
    {
        
    }
    
    public AddressEntity(string state, string city, string district, string logradouro, string number)
    {
        Id = Guid.NewGuid();
        State = state;
        City = city;
        District = district;
        Logradouro = logradouro;
        Number = number;
    }
}