
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationBasic.Model
{
    public class HomeBudgetContext : DbContext    
    {

        public virtual DbSet<Category> Categories { get; set; }

        public HomeBudgetContext(DbContextOptions<HomeBudgetContext> options)
            : base(options)
        {
           
        }


       
    }
}
