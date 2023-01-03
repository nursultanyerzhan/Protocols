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
}
