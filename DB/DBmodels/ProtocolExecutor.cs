using System.ComponentModel.DataAnnotations;

namespace Protocols.DB.DBmodels;

public class ProtocolExecutor : DataEntity
{
    [Required]
    public Guid ProtocolMissionId { get; set; }

    public Guid ProtocolUserId { get; set; }
    
    public string FreeUserName { get; set; }

}

