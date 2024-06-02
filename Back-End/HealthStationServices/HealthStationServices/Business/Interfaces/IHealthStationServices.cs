﻿using HealthStationServices.Business.Dto.HealthStation;
using HealthStationServices.Domain.Entities;
using HealthStationServices.Domain.Util.Pagination;

namespace HealthStationServices.Business.Interfaces;

public interface IHealthStationService
{
    public Task<PaginatedResult<HealthStationEntity>> GetAllHealthStations(GetAllHealthStationsRequest filter,
        CancellationToken cancellationToken);
    public Task<HealthStationEntity> GetHealthStationById(Guid id, CancellationToken cancellationToken);
    public Task<HealthStationEntity> CreateHealthStation(HealthStationEntity healthStation, CancellationToken cancellationToken);
    public Task<HealthStationEntity> UpdateHealthStation(Guid id, HealthStationEntity healthStation, CancellationToken cancellationToken);
    public Task<bool> DeleteHealthStation(Guid id, CancellationToken cancellationToken);
}