using HealthStationServices.Business.Interfaces;
using HealthStationServices.Connectors.Persistence.Data;
using Microsoft.AspNetCore.Mvc;

namespace HealthStationServices.Application;

[ApiController]
[Route("health-station")]
public class HealthStationController : ControllerBase
{
    private readonly IInsertDataInDataBase _insertDataInDataBase;
    private readonly IHealthStationService _healthStationServices;
    
    public HealthStationController(IInsertDataInDataBase insertDataInDataBase, IHealthStationService healthStationService)
    {
        _insertDataInDataBase = insertDataInDataBase;
        _healthStationServices = healthStationService;
    }
    
    [HttpPost]
    public async ValueTask<IActionResult> InsertDb()
    {
        _insertDataInDataBase.Insert();

        return Ok("DB populado");
    }
    
    [HttpGet]
    public async ValueTask<IActionResult> Get(Guid id)
    {
        var healthStation = await _healthStationServices.GetHealthStationById(id, default);
        return Ok(healthStation);
    }
}