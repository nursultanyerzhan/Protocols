using System.ComponentModel.DataAnnotations;

namespace Protocols.DB.DBmodels;

public class ProtocolMission : DataEntity
{
    [Required]
    public Guid ProtocolMissionGroupId { get; set; }

    [Required]
    public string EventName { get; set; }
    
    public DateTime Deadline { get; set; }
    public Guid ProtocolPeriodicalTypeId { get; set; }
}

