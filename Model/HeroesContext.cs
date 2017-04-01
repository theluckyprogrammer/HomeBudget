
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationBasic.Model
{
    public class HeroesContext : DbContext    
    {

        public virtual DbSet<Hero> Heroes { get; set; }

        public HeroesContext(DbContextOptions<HeroesContext> options)
            : base(options)
        {
           
        }


       
    }
}
