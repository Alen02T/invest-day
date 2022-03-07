using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Puja")]
public class PujaEntity
{
    public double Cantidad { get; set; }
    public int Id_producto { get; set; }
    public int Id { get; set; }

}
