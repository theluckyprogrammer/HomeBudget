
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

        public virtual DbSet<RealizationItem> RealizationItems { get; set; }

        public HomeBudgetContext(DbContextOptions<HomeBudgetContext> options)
            : base(options)
        {
            DefaultCategoryId = -1;
        }
      
    }
}
