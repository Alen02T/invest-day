using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Tarea")]
public class TareaEntity
{
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public DateTime Fecha_tarea { get; set; }
    public int N_telefono { get; set; }
    public string Link_maps { get; set; }
    public string Pagina_web { get; set; }
    public string Comentarios { get; set; }
    public int Id { get; set; }

}