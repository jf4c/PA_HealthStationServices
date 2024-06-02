using HealthStationServices.Business.Dto.HealthStation;
using HealthStationServices.Business.Interfaces;
using HealthStationServices.Connectors.Persistence.Data;
using HealthStationServices.Domain.Entities;
using HealthStationServices.Domain.Util.Pagination;
using Microsoft.EntityFrameworkCore;

namespace HealthStationServices.Business.Services;

public class HealthStationService : IHealthStationService
{
    private readonly ApplicationDbContext _dbContext;

    public HealthStationService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<PaginatedResult<HealthStationEntity>> GetAllHealthStations(GetAllHealthStationsRequest filter,
        CancellationToken cancellationToken)
    {
        var query = GetAllHealthStationsQueryBuilder
            .CreateBuilder(_dbContext)
            .SetFilter(filter)
            .NameQueryBuilder()
            .StateQueryBuilder()
            .CityQueryBuilder()
            .DistrictQueryBuilder()
            .LogradouroQueryBuilder()
            .BuildQuery();

        return await query.GetPaginatedAsync(filter.Page, filter.PageSize, cancellationToken);
    }

    public async Task<HealthStationEntity> GetHealthStationById(Guid id, CancellationToken cancellationToken)
    {
        var healthStation = await _dbContext.HealthStations
            .Include(x => x.Address)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (healthStation is null)
        {
            throw new Exception("healthStation not exist");
        }

        return healthStation;
    }


    public Task<HealthStationEntity> CreateHealthStation(HealthStationEntity healthStation,
        CancellationToken cancellationToken)
    {
        var healthStationEntity = new HealthStationEntity(healthStation.Name, healthStation.Address);
        _dbContext.HealthStations.Add(healthStationEntity);
        _dbContext.SaveChanges();
        return Task.FromResult(healthStationEntity);
    }

    public Task<HealthStationEntity> UpdateHealthStation(Guid id, HealthStationEntity healthStation,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteHealthStation(Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

public sealed class GetAllHealthStationsQueryBuilder
{
    private static readonly GetAllHealthStationsQueryBuilder _instance = new();

    private IQueryable<HealthStationEntity> Query { get; set; }

    private GetAllHealthStationsRequest Filter { get; set; }

    private GetAllHealthStationsQueryBuilder()
    {
    }

    public static GetAllHealthStationsQueryBuilder Instance => _instance;

    public static GetAllHealthStationsQueryBuilder CreateBuilder(ApplicationDbContext dbContext)
    {
        _instance.Query = dbContext.HealthStations
            .AsNoTracking()
            .Include("Address");
        return _instance;
    }

    public GetAllHealthStationsQueryBuilder SetFilter(GetAllHealthStationsRequest filter)
    {
        _instance.Filter = filter;
        return this;
    }

    public GetAllHealthStationsQueryBuilder NameQueryBuilder()
    {
        if (Filter.Name != null)
            Query = Query.Where(x => x.Name.ToLower().Contains(Filter.Name.ToLower()));
        return this;
    }

    public GetAllHealthStationsQueryBuilder StateQueryBuilder()
    {
        if (Filter.State != null)
            Query = Query.Where(x => x.Address.State.ToLower().Contains(Filter.State.ToLower()));
        return this;
    }

    public GetAllHealthStationsQueryBuilder CityQueryBuilder()
    {
        if (Filter.City != null)
            Query = Query.Where(x => x.Address.City.ToLower().Contains(Filter.City.ToLower()));
        return this;
    }

    public GetAllHealthStationsQueryBuilder DistrictQueryBuilder()
    {
        if (Filter.District != null)
            Query = Query.Where(x => x.Address.District.ToLower().Contains(Filter.District.ToLower()));
        return this;
    }

    public GetAllHealthStationsQueryBuilder LogradouroQueryBuilder()
    {
        if (Filter.Logradouro != null)
            Query = Query.Where(x => x.Address.Logradouro.ToLower().Contains(Filter.Logradouro.ToLower()));
        return this;
    }

    public IQueryable<HealthStationEntity> BuildQuery()
    {
        return Query;
    }
}