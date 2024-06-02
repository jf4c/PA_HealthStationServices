using HealthStationServices.Business.Dto.HealthStation;
using HealthStationServices.Business.Interfaces;
using HealthStationServices.Connectors.Persistence.Data;
using HealthStationServices.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace HealthStationServices.Application;

[ApiController]
[Route("health-station")]
public class HealthStationController : ControllerBase
{
    private readonly IInsertDataInDataBase _insertDataInDataBase;
    private readonly IHealthStationService _healthStationServices;
    private readonly IHealthService _healthService;

    public HealthStationController(IInsertDataInDataBase insertDataInDataBase,
        IHealthStationService healthStationService, IHealthService healthService)
    {
        _insertDataInDataBase = insertDataInDataBase;
        _healthStationServices = healthStationService;
        _healthService = healthService;
    }

    [HttpPost]
    public async ValueTask<IActionResult> InsertDb()
    {
        _insertDataInDataBase.Insert();

        return Ok("DB populado");
    }

    [HttpGet]
    public async ValueTask<IActionResult> Get(Guid id, CancellationToken cancellationToken)
    {
        var healthStation = await _healthStationServices.GetHealthStationById(id, cancellationToken);
        return Ok(healthStation);
    }

    [HttpGet]
    [Route("/all/HealthStations")]
    public async ValueTask<IActionResult> GetAllHealthStations([FromQuery] GetAllHealthStationsRequest filter,
        CancellationToken cancellationToken)
    {
        var healthStations = await _healthStationServices.GetAllHealthStations(filter, cancellationToken);
        return Ok(healthStations);
    }

    [HttpGet]
    [Route("/all/HealthServices")]
    public async ValueTask<IActionResult> GetAllHealthServices(CancellationToken cancellationToken)
    {
        var healthStations = await _healthService.GetAllHealthServices(cancellationToken);
        return Ok(healthStations);
    }

    // [HttpPost]
    // public async ValueTask<IActionResult> Create(HealthStationEntity healthStation, CancellationToken cancellationToken)
    // {
    //     var healthStationEntity = await _healthStationServices.CreateHealthStation(healthStation, cancellationToken);
    //     return Ok(healthStationEntity);
    // }
}