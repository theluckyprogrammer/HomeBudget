using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationBasic.Model
{
    public static class HeroDbInitializer
    {
        public static void Initialize(HeroesContext context)
        {

            context.Database.EnsureCreated();


            if (context.Heroes.Any())
                return;

            List<Hero> heroes = new List<Hero>
            {
                            new Hero{ Name = "Mr. Nice" },
                            new Hero{ Name = "Narco" },
                            new Hero{ Name = "Bombasto" },
                            new Hero{ Name = "Celeritas" },
                            new Hero{ Name = "Magneta" },
                            new Hero{ Name = "RubberMan" },
                            new Hero{ Name = "Dynama" },
                            new Hero{ Name = "Dr IQ" },
                            new Hero{ Name = "Magma" },
                            new Hero{ Name = "Tornado" }
            };

            context.Heroes.AddRange(heroes);
            context.SaveChanges();

        }
    }
}
