using BrunoZell.ModelBinding;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Protocols.DB;

namespace Protocols.Controllers;

[ApiController]
public class ProtocolDocumentController : ControllerBase
{
    private readonly ProtocolsContext _context;

    public ProtocolDocumentController(ProtocolsContext context)
    {
        _context = context;
    }

    [Route("getProtocolDocuments")]
    public async Task<ActionResult> GetList()
    {
        var list = await _context.ProtocolDocuments
            .ToListAsync();
        return Ok(list);
    }

    [Route("postTestData")]
    [HttpPost]
    public async Task<ActionResult> PostTestData([FromForm] DtoEast data) //, List<IFormFile> file
    {
        var list = await _context.ProtocolDocuments
            .ToListAsync();
        return Ok(list);
    }

    [Route("uploadphoto")]
    [HttpPost]
    public string UploadPhoto([FromForm] DtoTestData data) //
    {
        return "file.Name0000000000000000000000000000000";
    }
    
    [Route("postDocument")]
    [HttpPost]
    public string PostDocument([FromForm] DtoProtocolDocument data) //
    {
        using (var db = new ProtocolsContext()) {
            ProtocolDocument document = new ProtocolDocument();
            document.CreatedDate = DateTime.Now;
            document.EndDate = data.EndDate;
            document.Id = Guid.NewGuid();
            document.MeetingDay = data.StartDate.ToShortDateString();
            document.StartDate= data.StartDate;
            document.Title = data.Title;
            db.ProtocolDocuments.Add(document);
            db.SaveChanges();
        }
        return "Ok";
    }
}

public class Country
{
    public string label { get; set; }

    public List<int> value { get; set; }
}
public class DtoProtocolDocument
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Title { get; set; }
}

public class DtoEast
{
    public string userName { get; set; }
    public int selectName { get; set; }
    public List<int> country { get; set; }

    public List<IFormFile> fileEast { get; set; }
}

public class DtoTestData
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string username { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string zip { get; set; }
    public int selectVal { get; set; }
    public bool terms { get; set; }
    // public IFormFile File { get; set; }
    public List<IFormFile> File { get; set; }
}

public class UploadPhotoRequest
{
    public IFormFile File { get; set; }
}