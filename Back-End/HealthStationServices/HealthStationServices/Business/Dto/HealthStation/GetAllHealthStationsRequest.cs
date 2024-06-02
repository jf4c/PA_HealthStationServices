using HealthStationServices.Domain.Util.Pagination;

namespace HealthStationServices.Business.Dto.HealthStation;

public class GetAllHealthStationsRequest : PaginatedRequestBase
{
    public GetAllHealthStationsRequest()
    {
        Page = 1;
        PageSize = 10;
    }
    
    public string? Name { get; set; }
    public string? State { get; set; }
    public string? City { get; set; }
    public string? District { get; set; }
    public string? Logradouro { get; set; }
}