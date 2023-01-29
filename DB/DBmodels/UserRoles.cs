using System.ComponentModel.DataAnnotations;
using Protocols.DB.DBmodels;

public class UserRoles : DataEntity
{
    public bool HasRole { get; set; }
}