using Microsoft.AspNetCore.Mvc;
using Protocols.DB;

namespace Protocols.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        using (var db = new ProtocolsContext())
        {
            ProtocolMissionGroup protocolMissionGroup = new ProtocolMissionGroup();
            protocolMissionGroup.CreatedDate = DateTime.Now;
            protocolMissionGroup.Id = Guid.NewGuid();
            protocolMissionGroup.Title = "test main name";
            protocolMissionGroup.ProtocolDocumentId = Guid.NewGuid();
            db.ProtocolMissionGroups.Add(protocolMissionGroup);
            db.SaveChanges();
        }

        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
