using AutoMapper;

public class TareaProfile : Profile
{
    public TareaProfile()
    {
        CreateMap<TareaDTO, TareaEntity>();
        CreateMap<TareaEntity, TareaDTO>();
        CreateMap<BaseTareaDTO, TareaEntity>();
        CreateMap<TareaEntity, BaseTareaDTO>();
    }
}
