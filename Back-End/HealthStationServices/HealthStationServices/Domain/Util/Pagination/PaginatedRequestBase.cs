namespace HealthStationServices.Domain.Util.Pagination;

public class PaginatedRequestBase
{
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
}