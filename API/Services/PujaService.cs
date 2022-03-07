using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class PujaService : IPujaService
{
    private readonly LibraryContext _context;
    private readonly IMapper _mapper;

    public PujaService(LibraryContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public PujaDTO Add(BasePujaDTO basePuja)
    {
        var _mappedPuja = _mapper.Map<PujaEntity>(basePuja);
        var entityAdded = _context.Puja.Add(_mappedPuja);
        _context.SaveChanges();
        return _mapper.Map<PujaDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        PujaEntity Puja = _context.Puja.FirstOrDefault(x => x.Id == guid);

        if (Puja == null)
            throw new ApplicationException($"Puja with id {guid} not found");

        _context.Puja.Remove(Puja);
        _context.SaveChanges();
    }

    public IEnumerable<PujaDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<PujaDTO>>(_context.Puja.Select(x => x));
    }

    public IEnumerable<PujaDTO> GetAllPuja(int guid)
    {
        return _mapper.Map<IEnumerable<PujaDTO>>(_context.Puja.Where(x => x.Id_producto == guid));
    }

    public PujaDTO GetByID(int guid)
    {
        return _mapper.Map<PujaDTO>(_context.Puja.FirstOrDefault(x => x.Id == guid));
    }

    public PujaDTO Modify(BasePujaDTO Puja, int guid)
    {
        var _mappedPuja = _mapper.Map<PujaEntity>(Puja);
        _mappedPuja.Id = guid;

        PujaEntity modifiedPuja = _context.Puja.FirstOrDefault(x => x.Id == guid);

        if (modifiedPuja == null)
            return null;

        _context.Entry(modifiedPuja).CurrentValues.SetValues(_mappedPuja);

        _context.SaveChanges();

        return _mapper.Map<PujaDTO>(_mappedPuja);
    }

}