using System.Reflection;
using AutoMapper;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews();
        services.AddTransient<ProductoContext>(_ =>
            new ProductoContext(Configuration.GetConnectionString("DefaultConnection")));

        services.AddSwaggerGen();

        var mapperConfig = new MapperConfiguration(mc =>
        {
            /*mc.AddProfile(new BookProfile());
            mc.AddProfile(new FaltasProfile());*/
            mc.AddProfile(new ProductoProfile());
            mc.AddProfile(new PujaProfile());
        });

        IMapper mapper = mapperConfig.CreateMapper();
        services.AddSingleton(mapper);

        /*services.AddSingleton<IBookService, BookService>();
        services.AddSingleton<IFaltasService, FaltasService>();*/
        services.AddSingleton<IProductoService, ProductoService>();
        services.AddSingleton<IPujaService, PujaService>();

    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI();

        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());


        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
        });
    }
}