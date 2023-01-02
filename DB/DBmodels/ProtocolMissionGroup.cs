using System.ComponentModel.DataAnnotations;
using Protocols.DB.DBmodels;

public class ProtocolMissionGroup : DataEntity
{
    [Required]
    public Guid ProtocolDocumentId { get; set; }
    
    [Required]
    public string Title { get; set; }
}