using System.ComponentModel.DataAnnotations;

namespace Protocols.DB.DBmodels;

public class ProtocolUser : DataEntity
{
    [Required]
    public string Name { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string PasswordHash { get; set; }
}