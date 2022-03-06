using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Producto")]
public class ProductoEntity
{
    public string Nombre { get; set; }
    public double Precio { get; set; }
    public string Ruta { get; set; }
    public int Id { get; set; }

}
