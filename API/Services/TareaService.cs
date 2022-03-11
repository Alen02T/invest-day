using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class TareaService : ITareaService
{
    private readonly TareaContext _context;
    private readonly IMapper _mapper;

    public TareaService(TareaContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public TareaDTO Add(BaseTareaDTO baseTarea)
    {
        var _mappedTarea = _mapper.Map<TareaEntity>(baseTarea);
        var entityAdded = _context.Tarea.Add(_mappedTarea);
        _context.SaveChanges();
        return _mapper.Map<TareaDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        TareaEntity Tarea = _context.Tarea.FirstOrDefault(x => x.Id == guid);

        if (Tarea == null)
            throw new ApplicationException($"Tarea with id {guid} not found");

        _context.Tarea.Remove(Tarea);
        _context.SaveChanges();
    }

    public IEnumerable<TareaDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<TareaDTO>>(_context.Tarea.Select(x => x));
    }

    public TareaDTO GetByID(int guid)
    {
        return _mapper.Map<TareaDTO>(_context.Tarea.FirstOrDefault(x => x.Id == guid));
    }

    public TareaDTO Modify(BaseTareaDTO Tarea, int guid)
    {
        var _mappedTarea = _mapper.Map<TareaEntity>(Tarea);
        _mappedTarea.Id = guid;

        TareaEntity modifiedTarea = _context.Tarea.FirstOrDefault(x => x.Id == guid);

        if (modifiedTarea == null)
            return null;

        _context.Entry(modifiedTarea).CurrentValues.SetValues(_mappedTarea);

        _context.SaveChanges();

        return _mapper.Map<TareaDTO>(_mappedTarea);
    }

}