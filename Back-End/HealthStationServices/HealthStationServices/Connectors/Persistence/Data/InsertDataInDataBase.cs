using HealthStationServices.Domain.Entities;
using OfficeOpenXml;

namespace HealthStationServices.Connectors.Persistence.Data;

public class InsertDataInDataBase : IInsertDataInDataBase
{
    private readonly ApplicationDbContext _dbContext;

    public InsertDataInDataBase(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public List<HealthStationEntity> Insert()
    {
        const string xlsxPath = @"C:\Users\Julio\Desktop\PA\PA_HealthStationServices\Postos_de_Saude.xlsx";
        var healthStations = ReadXlsx(xlsxPath);
        return healthStations;
    }

    private List<HealthStationEntity> ReadXlsx(string xlsxPath)
    {
        var healthStations = new List<HealthStationEntity>();
        var file = new FileInfo(xlsxPath);
        using var package = new ExcelPackage(file);
        var planilha = package.Workbook.Worksheets[0];

        var totalLinhas = planilha.Dimension.Rows;

        for (var linha = 2; linha <= totalLinhas; linha++)
        {
            var name = planilha.Cells[linha, 3].Value.ToString()!;
            var state = planilha.Cells[linha, 1].Value.ToString()!;
            var city = planilha.Cells[linha, 2].Value.ToString()!;
            var district = planilha.Cells[linha, 6].Value.ToString()!;
            var logradouro = planilha.Cells[linha, 4].Value.ToString()!;
            var number = planilha.Cells[linha, 5]?.Value.ToString();

            if (number == null) continue;
            
            var address = new AddressEntity(state, city, district, logradouro, number);
            
            var healthStation = new HealthStationEntity(name, address);
            _dbContext.Addresses.Add(address);
            _dbContext.HealthStations.Add(healthStation);
        }

        _dbContext.SaveChanges();
        return healthStations;
    }
}

public interface IInsertDataInDataBase
{
    public List<HealthStationEntity> Insert();
}