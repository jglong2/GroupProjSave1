using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Menu
    {
        public int Id { get; set; }
        public string MenuItem { get; set; }
        public string ServingSize { get; set; }
        public string Calories { get; set; }
        public string Fats { get; set; }
        public string SaturatedFats { get; set; }
        public string Cholesterol { get; set; }
        public string Sodium { get; set; }
        public string Carbohydrates { get; set; }
        public string Fiber { get; set; }
        public string Sugar { get; set; }
        public string Protein { get; set; }
        
    }
}