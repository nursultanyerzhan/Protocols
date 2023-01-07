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
    public async Task<ActionResult> PostTestData([FromForm] IFormFile file) //, List<IFormFile> file
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
}

public class DtoTestData
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string username { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string zip { get; set; }
    public bool terms { get; set; }
    public IFormFile File { get; set; }
}

public class UploadPhotoRequest
{
    public IFormFile File { get; set; }
}