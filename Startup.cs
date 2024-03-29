﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

namespace Villians;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.Configure<DatabaseSettings>(
            Configuration.GetSection(nameof(DatabaseSettings)));

        services.AddSingleton(sp =>
            sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

        services.Configure<ImageSettings>(
            Configuration.GetSection(nameof(ImageSettings)));

        services.AddSingleton(sp =>
            sp.GetRequiredService<IOptions<ImageSettings>>().Value);

        services.AddSingleton(typeof(VillianService));
        services.AddSingleton(typeof(ImageService));
        services.AddSingleton(typeof(ImageResizeService));

        services.AddControllersWithViews();

        services.AddSwaggerDocument(config =>
        {
            config.PostProcess = document =>
            {
                document.Info.Version = "v1";
                document.Info.Title = "Villains";
                document.Info.Description = "A .NET Core / Angular sandbox I created to experiment and have fun with my kids.";
                document.Info.Contact = new NSwag.OpenApiContact
                {
                    Name = "Ben Osborne",
                    Email = "ben@osbornesupremacy.com",
                    Url = "https://github.com/OsborneSupremacy"
                };
            };
        });

        // In production, the Angular files will be served from this directory
        services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "ClientApp/dist";
        });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseStaticFiles();
        app.UseOpenApi();
        app.UseSwaggerUi();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();

        if (!env.IsDevelopment())
        {
            app.UseSpaStaticFiles();
        }

        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
        });

        app.UseSpa(spa =>
        {
            spa.Options.SourcePath = "ClientApp";

            if (env.IsDevelopment())
            {
                spa.UseAngularCliServer(npmScript: "start");
            }
        });
    }
}
