using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class ProductoService : IProductoService
{
    private readonly ProductoContext _context;
    private readonly IMapper _mapper;

    public ProductoService(ProductoContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public ProductoDTO Add(BaseProductoDTO baseProducto)
    {
        var _mappedProducto = _mapper.Map<ProductoEntity>(baseProducto);
        var entityAdded = _context.Producto.Add(_mappedProducto);
        _context.SaveChanges();
        return _mapper.Map<ProductoDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        ProductoEntity Producto = _context.Producto.FirstOrDefault(x => x.Id == guid);

        if (Producto == null)
            throw new ApplicationException($"Producto with id {guid} not found");

        _context.Producto.Remove(Producto);
        _context.SaveChanges();
    }

    public IEnumerable<ProductoDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<ProductoDTO>>(_context.Producto.Select(x => x));
    }

    public ProductoDTO GetByID(int guid)
    {
        return _mapper.Map<ProductoDTO>(_context.Producto.FirstOrDefault(x => x.Id == guid));
    }

    public ProductoDTO Modify(BaseProductoDTO Producto, int guid)
    {
        var _mappedProducto = _mapper.Map<ProductoEntity>(Producto);
        _mappedProducto.Id = guid;

        ProductoEntity modifiedProducto = _context.Producto.FirstOrDefault(x => x.Id == guid);

        if (modifiedProducto == null)
            return null;

        _context.Entry(modifiedProducto).CurrentValues.SetValues(_mappedProducto);

        _context.SaveChanges();

        return _mapper.Map<ProductoDTO>(_mappedProducto);
    }

}