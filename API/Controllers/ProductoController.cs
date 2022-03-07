using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductoController : ControllerBase
{
    private readonly ILogger<ProductoController> _logger;
    private readonly IProductoService _ProductoService;

    /// <summary>
    /// Crea un  ProductoController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="ProductoService">used for dealing with the producto data</param>
    public ProductoController(ILogger<ProductoController> logger, IProductoService ProductoService)
    {
        _logger = logger;
        _ProductoService = ProductoService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductoDTO))]
    public ActionResult<ProductoDTO> Get()
    {
        return Ok(_ProductoService.GetAll());
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProductoDTO> Get(int Id)
    {
        ProductoDTO result = _ProductoService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProductoDTO> Delete(int Id)
    {
        ProductoDTO result = _ProductoService.GetByID(Id);

        if (result == null)
            return NotFound();

        _ProductoService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductoDTO))]
    public ActionResult<ProductoDTO> Post([FromBody] BaseProductoDTO baseProducto)
    {

        return Ok(_ProductoService.Add(baseProducto));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProductoDTO))]
    public ActionResult<ProductoDTO> Put([FromBody] BaseProductoDTO baseProducto, int Id)
    {

        return Ok(_ProductoService.Modify(baseProducto, Id));
    }

}
