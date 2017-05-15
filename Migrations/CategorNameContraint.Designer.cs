using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using HomeBudget.DatabaseContext;

namespace HomeBudget.Migrations
{
    [DbContext(typeof(HomeBudgetContext))]
    [Migration("CategorNameContraint")]
    partial class CategorNameContraint
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HomeBudget.Model.Category", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasAlternateKey("Name")
                        .HasName("CategoryUniqueName");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("HomeBudget.Model.Objective", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("CategoryId");

                    b.Property<string>("Description");

                    b.Property<bool>("IsHistorical");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Objectives");
                });

            modelBuilder.Entity("HomeBudget.Model.Objective", b =>
                {
                    b.HasOne("HomeBudget.Model.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");
                });
        }
    }
}
