using System.ComponentModel.DataAnnotations;
using Protocols.DB.DBmodels;

public class ProtocolDocument : DataEntity
{
    [Required]
    public string Title { get; set; }

    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string MeetingDay { get; set; }
}