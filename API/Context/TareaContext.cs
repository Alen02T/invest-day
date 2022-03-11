using System.Data.Entity;

public class TareaContext : DbContext
{
    public TareaContext(string connectionString) : base(connectionString)
    { }
    public DbSet<TareaEntity> Tarea { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
