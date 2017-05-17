using HomeBudget.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeBudget.DatabaseContext
{
    public partial class HomeBudgetContext
    {
        public Category DefaultCategory { get; internal set; }

        public void Add(Objective objective)
       {
            AddCategory(objective); 
            Objectives.Add(objective);           
       }

       private void AddCategory(Objective objective)
        {
            if (objective.Category == null)
                return;

            if (Categories.Contains(objective.Category))
            {
                Entry(objective.Category).State = Microsoft.EntityFrameworkCore.EntityState.Unchanged;
                return;
            }

            Categories.Add(objective.Category);                   
        }



    }
}
