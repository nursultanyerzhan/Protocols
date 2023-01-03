using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Protocols.DB;

namespace Protocols.Controllers;

[ApiController]
public class CrudOperationController : ControllerBase
{
    private readonly ProtocolsContext _context;

    public CrudOperationController(ProtocolsContext context)
    {
        _context = context;
    }

    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [Route("testgetdata2")]
    public async Task<ActionResult> GetTodoItems()
    {
        var list = await _context.ProtocolMissionGroups
            .ToListAsync();
        return Ok(list);
    }

    [Route("testgetdata")]
    public IEnumerable<WeatherForecast> GetWeatherForecastList()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
