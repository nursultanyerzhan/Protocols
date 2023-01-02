using System.ComponentModel.DataAnnotations;

namespace Protocols.DB.DBmodels;

public class DataEntity
{
    [Key]
    public Guid Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
}