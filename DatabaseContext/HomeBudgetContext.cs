
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeBudget.Model;

namespace HomeBudget.DatabaseContext
{
    public partial class HomeBudgetContext : DbContext    
    {

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Objective> Objectives { get; set; }

        public HomeBudgetContext(DbContextOptions<HomeBudgetContext> options)
            : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .HasAlternateKey(c => c.Name)               
                .HasName("CategoryUniqueName");
        }


    }
}
