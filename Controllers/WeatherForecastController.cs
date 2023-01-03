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
            ProtocolDocument protocolMissionGroup = new ProtocolDocument();
            protocolMissionGroup.CreatedDate = DateTime.Now;
            protocolMissionGroup.Id = Guid.NewGuid();
            protocolMissionGroup.MeetingDay = DateTime.Now.ToShortDateString();
            protocolMissionGroup.StartDate = DateTime.Now;
            protocolMissionGroup.EndDate = DateTime.Now.AddDays(7);
            protocolMissionGroup.Title = Guid.NewGuid().ToString();
            db.ProtocolDocuments.Add(protocolMissionGroup);
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

    [HttpPost]
    public void Post(string? email)
    {
        // return View();
    }
}
