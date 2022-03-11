using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

public interface ITareaService
{
    public IEnumerable<TareaDTO> GetAll();

    public TareaDTO GetByID(int guid);

    public TareaDTO Add(BaseTareaDTO guid);

    public void Delete(int guid);

    public TareaDTO Modify(BaseTareaDTO Tarea, int guid);
}