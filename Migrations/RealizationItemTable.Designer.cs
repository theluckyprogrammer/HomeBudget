using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using HomeBudget.DatabaseContext;

namespace HomeBudget.Migrations
{
    [DbContext(typeof(HomeBudgetContext))]
    [Migration("20170609171824_RealizationItemTable")]
    partial class RealizationItemTable
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

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("HomeBudget.Model.Objective", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<long?>("CategoryId");

                    b.Property<string>("Description");

                    b.Property<bool>("IsHistorical");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Objectives");
                });

            modelBuilder.Entity("HomeBudget.Model.RealizationItem", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<long>("CategoryId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<bool>("IsHistorical");

                    b.Property<long>("ObjectiveId");

                    b.HasKey("Id");

                    b.ToTable("RealizationItems");
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
