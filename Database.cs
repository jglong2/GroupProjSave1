using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.Data.Sqlite;

namespace api
{
    public class Database
    {
        // Use absolute path to avoid creating a new empty DB in the build output folder
        private string connectionString = "Data Source=C:\\Users\\tech\\Documents\\MIS321\\groupProj1\\api\\FoodMenuItems.db";

        // Get all menu items from a specific per-place table, e.g., menu_cfa
        public List<Menu> GetMenuForPlace(string placeId)
        {
            var sanitized = new string((placeId ?? string.Empty).Where(c => char.IsLetterOrDigit(c) || c == '-' || c == '_').ToArray());
            if (string.IsNullOrEmpty(sanitized)) return new List<Menu>();
            // Convention: each place has its own table named "{placeId}Menu" (e.g., cfaMenu)
            var tableName = $"{sanitized.Replace('-', '_')}Menu";

            using var con = new SqliteConnection(connectionString);
            con.Open();

            // Ensure table exists
            using (var exists = new SqliteCommand("SELECT name FROM sqlite_master WHERE type='table' AND name=@t", con))
            {
                exists.Parameters.AddWithValue("@t", tableName);
                var ok = exists.ExecuteScalar();
                if (ok == null) return new List<Menu>();
            }

            var sql = $"SELECT \"id\", \"menuItem\", \"serving size\", \"calories\", \"fats\", \"saturated fats\", \"cholesterol\", \"sodium\", \"carbohydrates\", \"fiber\", \"sugar\", \"protein\" FROM \"{tableName}\"";
            using var cmd = new SqliteCommand(sql, con);
            using var rdr = cmd.ExecuteReader();
            var items = new List<Menu>();
            while (rdr.Read())
            {
                items.Add(new Menu
                {
                    Id = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0),
                    MenuItem = rdr.IsDBNull(1) ? string.Empty : rdr.GetString(1),
                    ServingSize = rdr.IsDBNull(2) ? string.Empty : rdr.GetString(2),
                    Calories = rdr.IsDBNull(3) ? string.Empty : rdr.GetString(3),
                    Fats = rdr.IsDBNull(4) ? string.Empty : rdr.GetString(4),
                    SaturatedFats = rdr.IsDBNull(5) ? string.Empty : rdr.GetString(5),
                    Cholesterol = rdr.IsDBNull(6) ? string.Empty : rdr.GetString(6),
                    Sodium = rdr.IsDBNull(7) ? string.Empty : rdr.GetString(7),
                    Carbohydrates = rdr.IsDBNull(8) ? string.Empty : rdr.GetString(8),
                    Fiber = rdr.IsDBNull(9) ? string.Empty : rdr.GetString(9),
                    Sugar = rdr.IsDBNull(10) ? string.Empty : rdr.GetString(10),
                    Protein = rdr.IsDBNull(11) ? string.Empty : rdr.GetString(11)
                });
            }
            return items;
        }
    }
}