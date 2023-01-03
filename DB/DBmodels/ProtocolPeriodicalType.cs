using System.ComponentModel.DataAnnotations;
using Protocols.DB.DBmodels;

public class ProtocolPeriodicalType : DataEntity
{
    
    [Required]
    public string TypeName { get; set; }
}