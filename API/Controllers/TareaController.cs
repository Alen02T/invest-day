using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class TareaController : ControllerBase
{
    private readonly ILogger<TareaController> _logger;
    private readonly ITareaService _TareaService;

    /// <summary>
    /// Crea un  TareaController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="TareaService">used for dealing with the Tarea data</param>
    public TareaController(ILogger<TareaController> logger, ITareaService TareaService)
    {
        _logger = logger;
        _TareaService = TareaService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TareaDTO))]
    public ActionResult<TareaDTO> Get()
    {
        return Ok(_TareaService.GetAll());
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TareaDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<TareaDTO> Get(int Id)
    {
        TareaDTO result = _TareaService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TareaDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<TareaDTO> Delete(int Id)
    {
        TareaDTO result = _TareaService.GetByID(Id);

        if (result == null)
            return NotFound();

        _TareaService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TareaDTO))]
    public ActionResult<TareaDTO> Post([FromBody] BaseTareaDTO baseTarea)
    {

        return Ok(_TareaService.Add(baseTarea));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TareaDTO))]
    public ActionResult<TareaDTO> Put([FromBody] BaseTareaDTO baseTarea, int Id)
    {

        return Ok(_TareaService.Modify(baseTarea, Id));
    }

}
