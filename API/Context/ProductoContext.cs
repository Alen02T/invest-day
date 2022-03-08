using System.Data.Entity;

public class ProductoContext : DbContext
{
    public ProductoContext(string connectionString) : base(connectionString)
    { }
    public DbSet<ProductoEntity> Producto { get; set; }
    public DbSet<PujaEntity> Puja { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
