using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class PujaController : ControllerBase
{
    private readonly ILogger<PujaController> _logger;
    private readonly IPujaService _PujaService;

    public PujaController(ILogger<PujaController> logger, IPujaService PujaService)
    {
        _logger = logger;
        _PujaService = PujaService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    public ActionResult<PujaDTO> Get()
    {
        return Ok(_PujaService.GetAll());
    }

    [HttpGet("p{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    public ActionResult<PujaDTO> GetPujas(int Id)
    {
        return Ok(_PujaService.GetAllPuja(Id));
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<PujaDTO> Get(int Id)
    {
        PujaDTO result = _PujaService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<PujaDTO> Delete(int Id)
    {
        PujaDTO result = _PujaService.GetByID(Id);

        if (result == null)
            return NotFound();

        _PujaService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    public ActionResult<PujaDTO> Post([FromBody] BasePujaDTO basePuja)
    {

        return Ok(_PujaService.Add(basePuja));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PujaDTO))]
    public ActionResult<PujaDTO> Put([FromBody] BasePujaDTO basePuja, int Id)
    {

        return Ok(_PujaService.Modify(basePuja, Id));
    }

}
