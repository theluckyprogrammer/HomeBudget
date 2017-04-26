using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeBudget.Model;

namespace HomeBudget.DatabaseContext
{
    public static class HomeBudgetInitializer
    {
        public static void Initialize(HomeBudgetContext context)
        {

            context.Database.EnsureCreated();


            if (context.Categories.Any())
                return;

            List<Category> categories = new List<Category>
            {
                            new Category{ Name = "Zdrowie" },
                            new Category{ Name = "Ubrania" },
                            new Category{ Name = "Jedzenie" },
                            new Category{ Name = "Rachunki" },                               
            };

            context.Categories.AddRange(categories);
            context.SaveChanges();

        }
    }
}
